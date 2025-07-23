// src/cardbox.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export class CardBox {
  /**
   * @param {THREE.Scene} scene
   * @param {import('lil-gui').GUI} gui
   */
  constructor(scene, gui, canvas) {
    this.scene = scene;
    this.gui = gui;
    this.canvas = canvas

    // Группа для модели
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Объект для храниния модели упаковки
    this.boxModel = null

    // Объект для хранения модели карты
    this.cardModel = null

    // Объект для хранения модели руки
    this.handModel = null

    // Объект для хранения карт
     this.cards = {};

    // Мапа для хранения загруженных текстур
    this.loadedTextures = {};

    // Флаг, что модель добавлена в сцену
    //this.modelLoaded = false;

    // Параметры позиции модели
    this.params = { x: 0, y: 0, z: 0 };
    const folder = this.gui.addFolder('Model Position');
    ['x', 'y', 'z'].forEach(axis => {
      folder
        .add(this.params, axis, -5, 5, 0.1)
        .name(`pos ${axis}`)
        .onChange(() => {
          this.group.position.set(
            this.params.x,
            this.params.y,
            this.params.z
          );
        })
        .listen();
    });
    folder.open();
  }

    /**
   * Инициализирует перетаскивание для модели руки
   */
initDraggable() {
    if (!this.handModel || !this.canvas) {
      console.error("Hand model or canvas is not available for dragging.");
      return;
    }

    const motionRange = 0.07;
    const dummyDiv = document.createElement('div');
    const bounds = { minX: -200, maxX: 200 };

    const mapPosition = (x) => {
      const minPos = -motionRange;
      const maxPos = motionRange;
      const progress = (x - bounds.minX) / (bounds.maxX - bounds.minX);
      this.handModel.position.x = minPos + progress * (maxPos - minPos);
    };

    const draggableInstance = Draggable.create(dummyDiv, {
      trigger: this.canvas,
      type: 'x',
      bounds: bounds,
      // Мы убираем inertia и snap, чтобы они не мешали.

      onDrag: function() {
        // 'this' здесь - это экземпляр Draggable. this.x - его позиция.
        mapPosition(this.x);
      },

      // Вместо snap используем этот обработчик
      onDragEnd: function() {
        // 'this' здесь - тоже экземпляр Draggable.
        // 'this.target' - это наш dummyDiv.

        // Мы создаем НАШУ собственную анимацию возврата для dummyDiv.
        gsap.to(this.target, {
          x: 0, // Цель анимации - 0 пикселей
          duration: 0.5,
          ease: 'power2.out',

          // onUpdate будет вызываться на каждом кадре НАШЕЙ анимации
          onUpdate: () => {
            // Обновляем позицию 3D-модели, читая текущее положение dummyDiv
            mapPosition(gsap.getProperty(this.target, "x"));
          }
        });
      }
    })[0];
  }
  /**
   * Загружает GLB и текстуры, вызывает onLoad когда всё готово
   * @param {string} modelUrl
   * @param {{ albedo:string, normal:string, roughness:string }} texUrls
   * @param {Function} onLoad
   */
  load(boxmodelUrl, handTexture, texUrls, onLoad) {
    // загрузчик, который ждёт и модель, и все текстуры
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      // сначала применяем все текстуры
      Object.entries(this.loadedTextures).forEach(([type, texture]) => {
        this._applyTexture(type, texture);
      });
      // затем колбэк пользователя
      if (onLoad) onLoad(this.group);
    };



   const gltfLoader = new GLTFLoader(manager);

    // 1) Загрузка первой модели (коробки)
    gltfLoader.load(boxmodelUrl, gltf => {
      this.box = gltf; 
      this.group.add(gltf.scene);
    });

 

    // Загрузка текстуры руки
    const handLoader = new THREE.TextureLoader(manager)
    handLoader.load(handTexture, texture => {
        texture.wrapS      = THREE.RepeatWrapping;       
        texture.wrapT      = THREE.RepeatWrapping;        
        texture.repeat.set(1, 1);    
        const plane = new THREE.PlaneGeometry(0.03,0.03)
        const handMaterial = new THREE.MeshBasicMaterial({
            map: texture,      
            transparent: true,     
            side: THREE.DoubleSide 
          });
        const handMesh = new THREE.Mesh(plane, handMaterial);
        handMesh.position.set(0, 0, 0.002);
        this.handModel = handMesh
        this.scene.add(this.handModel);
        // Инициализируем перетаскивание после создания модели руки
        this.initDraggable();
    })

    // 2) загрузка текстур с отключением flipY
    const texLoader = new THREE.TextureLoader(manager);
    Object.entries(texUrls).forEach(([type, url]) => {
      texLoader.load(url, texture => {
        texture.flipY = false;     
        texture.wrapS      = THREE.RepeatWrapping;       
        texture.wrapT      = THREE.RepeatWrapping;        
        texture.repeat.set(1, 1);                        
         
        this.loadedTextures[type] = texture;
      });
    });
  }

  /**
   * Устанавливает в сцену карты
   * @param {*} count // Количество отображаемых карт
   */
  setCards(count, cardTextures) {

  }

  /**
   * Применяет текстуру к материалам модели
   * @param {'albedo'|'normal'|'roughness'} type
   * @param {THREE.Texture} texture
   * @private
   */
  _applyTexture(type, texture) {
    this.group.traverse(obj => {
      if (!obj.isMesh) return;
      switch (type) {
        case 'albedo':
          texture.colorSpace = THREE.SRGBColorSpace;
          obj.material.map = texture;
          obj.material.metalness = 0.7;
          obj.material.roughness = 0.45;
          break;
        case 'normal':
          obj.material.normalMap = texture;
          break;
        case 'roughness':
         //obj.material.roughnessMap = texture;
          break;
      }
      obj.material.needsUpdate = true;
    });
  }
}