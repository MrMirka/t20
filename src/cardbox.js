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

    // Микшер для управления анимацией
    this.mixer = null;

    // Сюда надо сохранить анимацию
    this.animation = null

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
   * Загружает GLB и текстуры, вызывает onLoad когда всё готово
   * @param {string} modelUrl
   * @param {{ albedo:string, normal:string, roughness:string }} texUrls
   * @param {Function} onLoad
   */
  load(boxmodelUrl, texUrls, onLoad) {
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

      
      this.mixer = new THREE.AnimationMixer(gltf.scene);
      const clip =  gltf.animations[0];
      
      if (clip) {
        this.animation = this.mixer.clipAction(clip);
        this.animation.setLoop(THREE.LoopOnce);
        this.animation.clampWhenFinished = true;
      } else {
        console.warn('Animation with name "amin1" not found in the model!');
      }
    });


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

   play() {
    if (this.animation) {
      this.animation.reset().play();
    } else {
      console.error("Animation is not loaded or does not exist.");
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  /**
   * Обновляем кадры анимауии
   * @param {number} deltaTime 
   */
  update(deltaTime) {
    if (this.mixer) {
      this.mixer.update(deltaTime);
    }
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