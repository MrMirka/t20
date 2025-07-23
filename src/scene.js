// src/scene.js
import * as THREE from 'three';
import GUI from 'lil-gui';
import { CardBox } from './cardbox.js';

const RESOLUTION = window.devicePixelRatio || 1;

export class SceneSetup {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;

    // 1) базовая сцена + рендерер
    this.scene    = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5; 
    this.renderer.shadowMap.enabled = true;                  
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;    
    this.renderer.setPixelRatio(RESOLUTION);

    // 2) GUI
    this.gui    = new GUI({ title: 'Debug GUI' });
    this._addGlobalUI();

    // 3) resize
    window.addEventListener('resize', () => this._onResize());

    // 4) место где запомним колбэк
    this.onResourcesLoaded = null;
  }

  // === ПУБЛИЧНЫЕ МЕТОДЫ ===

  /**
   * Инициализировать камеру и добавить контролы в GUI
   * @param {Object} opts
   * @param {number[]} opts.position — [x,y,z]
   */
  initCamera({ position = [0, 0, 0.2] } = {}) {
    const [x, y, z] = position;
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      200000
    );
    this.camera.position.set(x, y, z);

    // GUI для камеры
    const camF = this.gui.addFolder('Camera');
    ['x','y','z'].forEach((axis, i) => {
      camF.add(this.camera.position, axis, -10, 10, 0.1)
          .name(`pos ${axis}`)
          .listen();
    });
    camF.open();
  }

  /**
   * Инициализировать два источника света (дальний + фон)
   */
  initLights() {
    // directional
    const d = new THREE.DirectionalLight(0xffffff, 1);
    d.position.set(5, 5, 5);
    this.scene.add(d);
    this._addLightUI('DirectionalLight', d);

    // ambient
    const a = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(a);
    this._addLightUI('AmbientLight', a);

  }

  /**
   * Загружает модель + текстуры и вызывает onResourcesLoaded(this.group)
   * @param {string} modelUrl
   * @param {{albedo:string, normal:string, roughness:string}} texUrls
   */
  loadModel(modelUrl, cardUrl, texUrls) {
    // воспользуемся тем же CardBox
    this.card = new CardBox(this.scene, this.gui, this.canvas);
    this.card.load(modelUrl,cardUrl, texUrls, group => {
      // колбэк пользователя из main.js
      if (this.onResourcesLoaded) {
        this.onResourcesLoaded(group);
      }
    });
  }

  /**
   * Запускает анимацию
   * @param {Function} [update] — вызывается каждый кадр перед рендером
   */
  render(update) {
    const loop = () => {
      requestAnimationFrame(loop);
      if (update) update();
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  }

  // === ВНУТРЕННИЕ ===

  _addGlobalUI() {
    this.params = { showGUI: true };
    const f = this.gui.addFolder('Global');
    f.add(this.params, 'showGUI')
     .name('Toggle GUI')
     .onChange(v => {
       this.gui.domElement.style.display = v ? '' : 'none';
     });
    f.open();
  }

  _addLightUI(name, light) {
    const f = this.gui.addFolder(name);
    // цвет
    if (light.color) {
      const p = { color: `#${light.color.getHexString()}` };
      f.addColor(p, 'color').name('color')
       .onChange(c => light.color.set(c));
    }
    // сила
    if ('intensity' in light) {
      f.add(light, 'intensity', 0, 10, 0.01).name('intensity');
    }
    // позиция
    if (light.position) {
      ['x','y','z'].forEach(axis => {
        f.add(light.position, axis, -10, 10, 0.1).name(axis);
      });
    }
    f.open();
  }

  _onResize() {
    this.camera.aspect = window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}