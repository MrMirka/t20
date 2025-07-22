// src/cardbox.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class CardBox {
  /**
   * @param {THREE.Scene} scene
   * @param {import('lil-gui').GUI} gui
   */
  constructor(scene, gui) {
    this.scene = scene;
    this.gui = gui;

    // Группа для модели
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Объект дял храниния модели упаковки
    this.boxModel = null

    // Объект для хранения модели карты
    this.cardModel = null

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
  load(boxmodelUrl, cardmodelUrl, texUrls, onLoad) {
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

    // 2) Загрузка второй модели (карты)
    if (cardmodelUrl != null) {
        gltfLoader.load(cardmodelUrl, gltf => {
        this.card = gltf; 
        this.group.add(gltf.scene);
    }); 
    }
   

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