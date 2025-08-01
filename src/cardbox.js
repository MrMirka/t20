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

    // Анимации
    this.animation_1 = null
    this.animation_2 = null

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
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      Object.entries(this.loadedTextures).forEach(([type, texture]) => {
        this._applyTexture(type, texture);
      });
      if (onLoad) onLoad(this.group);
    };



   const gltfLoader = new GLTFLoader(manager);

    gltfLoader.load(boxmodelUrl, gltf => {
      this.box = gltf; 
      this.group.add(gltf.scene);

      
      this.mixer = new THREE.AnimationMixer(gltf.scene);
      const clip =  gltf.animations[0];
      const clip_2 =  gltf.animations[1];
      
      if (clip) {
        this.animation_1 = this.mixer.clipAction(clip);
        this.animation_1.setLoop(THREE.LoopOnce);
        this.animation_1.clampWhenFinished = true;
      } else {
        console.warn('Animation with name "amin1" not found in the model!');
      }
      if (clip_2) {
        this.animation_2 = this.mixer.clipAction(clip_2);
        this.animation_2.setLoop(THREE.LoopOnce);
        this.animation_2.clampWhenFinished = true;
      } else {
        console.warn('Animation with name "amin1" not found in the model!');
      }
    });


    // 2) загрузка текстур 
    const texLoader = new THREE.TextureLoader(manager);
    Object.entries(texUrls).forEach(([type, url]) => {
      texLoader.load(url, texture => {
        switch (type) {
            case 'albedo':
              texture.colorSpace = THREE.SRGBColorSpace;
              break;
            case 'normal':
              texture.colorSpace = THREE.NoColorSpace;
              break;
            case 'roughness':
              texture.colorSpace = THREE.NoColorSpace;
              break;
        }
        texture.flipY = false;     
        texture.wrapS      = THREE.RepeatWrapping;       
        texture.wrapT      = THREE.RepeatWrapping;        
        texture.repeat.set(1, 1);                        
         
        this.loadedTextures[type] = texture;
      });
    });
  }

   play() {
    if (this.animation_1 && this.animation_2) {
      this.animation_1.reset().play();
      this.animation_2.reset().play();
    } else {
      console.error("Animation is not loaded or does not exist.");
    }
  }

  stop() {
    if (this.animation_1) {
      this.animation_1.stop();
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
          obj.material.metalness = 1;
          break;
        case 'normal':
          obj.material.normalMap = texture;
          break;
        case 'roughness':
          // Правка
         obj.material.roughnessMap = texture;
          break;
      }
      obj.material.needsUpdate = true;
    });
  }
}