import * as THREE from 'three';
import GUI from 'lil-gui';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { CardBox } from './cardbox.js';

const RESOLUTION = window.devicePixelRatio || 1;

const packTextures = {
  'pack1': {
      albedo:   '/textures/pack1/Package_01_Card_2048x2048px_Albedo_01.png',
      normal:   '/textures/pack1/Package_01_Card_2048x2048px_Normal_01.png',
      roughness:'/textures/pack1/Package_01_Card_2048x2048px_Roughness_01.png',
    },
  'pack3': {
      albedo:   '/textures/pack3/Package_03_Cards_2048x2048px_Albedo_01.png',
      normal:   '/textures/pack3/Package_03_Cards_2048x2048px_Normal_01.png',
      roughness:'/textures/pack3/Package_03_Cards_2048x2048px_Roughness_01.png',
    },
  'pack20': {
      albedo:   '/textures/pack20/Package_20_Cards_2048x2048px_Albedo_01.png',
      normal:   '/textures/pack20/Package_20_Cards_2048x2048px_Normal_01.png',
      roughness:'/textures/pack20/Package_20_Cards_2048x2048px_Roughness_01.png',
    },
  'pack80': {
      albedo:   '/textures/pack80/Package_80_Cards_2048x2048px_Albedo_01.png',
      normal:   '/textures/pack80/Package_80_Cards_2048x2048px_Normal_01.png',
      roughness:'/textures/pack80/Package_80_Cards_2048x2048px_Roughness_01.png',
    }
};

export class SceneSetup {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(RESOLUTION);

    this.modelUrl = null;
    this.envMapUrl = null;
    this.gui = null;
    this.camera = null;
    this.directionalLight = null;
    this.ambientLight = null;

    this.params = {
      showGUI: true,
      packName: null,
      environmentIntensity: 1.0,
    };

    window.addEventListener('resize', () => this._onResize());
    this.onResourcesLoaded = null;
  }

  initCamera({ position = [0, 0, 0.2] } = {}) {
    const [x, y, z] = position;
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      200000
    );
    this.camera.position.set(x, y, z);
  }

  initLights() {
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(5, 5, 5);
    this.scene.add(this.directionalLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);
  }

  loadEnvironment(url, onLoaded) {
    this.envMapUrl = url;
    const exrLoader = new EXRLoader();
    exrLoader.load(url, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.environment = texture;
      this.scene.environmentIntensity = this.params.environmentIntensity;
      
      if (onLoaded) onLoaded();
    });
  }

  loadModel(modelUrl, packName) {
    this.modelUrl = modelUrl;
    this.params.packName = packName;

    if (this.card && this.card.group) {
      this.scene.remove(this.card.group);
    }
    if (this.gui) {
      this.gui.destroy();
    }

    this.gui = new GUI({ title: 'Debug GUI' });
    this._addGlobalUI();
    this._addPackSwitcherUI();
    if (this.envMapUrl) {
      this._addEnvironmentUI();
    }
    if (this.camera) {
      this._addCameraUI();
    }
    if (this.directionalLight) {
      this._addLightUI('DirectionalLight', this.directionalLight);
    }
    if (this.ambientLight) {
      this._addLightUI('AmbientLight', this.ambientLight);
    }

    const boxTextures = packTextures[packName];
    this.card = new CardBox(this.scene, this.gui, this.canvas);
    this.card.load(this.modelUrl, boxTextures, group => {
      if (this.onResourcesLoaded) {
        this.onResourcesLoaded(group);
      }
    });
  }

  render(update) {
    const loop = () => {
      requestAnimationFrame(loop);
      if (update) update();
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  }


  _addGlobalUI() {
    const f = this.gui.addFolder('Global');
    f.add(this.params, 'showGUI')
     .name('Toggle GUI')
     .onChange(v => {
       this.gui.domElement.style.display = v ? '' : 'none';
     });
    f.open();
  }

  _addPackSwitcherUI() {
    const packNames = Object.keys(packTextures);
    let folder = this.gui.folders.find(f => f._title === 'Global') || this.gui.addFolder('Global');
    folder.add(this.params, 'packName', packNames)
     .name('Texture Pack')
     .onChange(newPackName => {
       this.loadModel(this.modelUrl, newPackName);
     });
  }

  _addEnvironmentUI() {
    const f = this.gui.addFolder('Environment');
    f.add(this.params, 'environmentIntensity', 0, 4, 0.1)
     .name('Intensity')
     .onChange(value => {
       if (this.scene.environment) {
         this.scene.environmentIntensity = value;
       }
     });

    // Привязываем контроллеры напрямую к scene.environmentRotation
    f.add(this.scene.environmentRotation, 'x', 0, Math.PI * 2, 0.01)
     .name('Rotation X');
    
    f.add(this.scene.environmentRotation, 'y', 0, Math.PI * 2, 0.01)
     .name('Rotation Y');

    f.add(this.scene.environmentRotation, 'z', 0, Math.PI * 2, 0.01)
     .name('Rotation Z');
     
    f.open();
  }

  _addCameraUI() {
    const camF = this.gui.addFolder('Camera');
    ['x','y','z'].forEach(axis => {
      camF.add(this.camera.position, axis, -10, 10, 0.1).name(`pos ${axis}`).listen();
    });
    camF.open();
  }

  _addLightUI(name, light) {
    const f = this.gui.addFolder(name);
    if (light.color) {
      const p = { color: `#${light.color.getHexString()}` };
      f.addColor(p, 'color').name('color').onChange(c => light.color.set(c));
    }
    if ('intensity' in light) {
      f.add(light, 'intensity', 0, 10, 0.01).name('intensity');
    }
    if (light.position) {
      ['x','y','z'].forEach(axis => {
        f.add(light.position, axis, -10, 10, 0.1).name(axis);
      });
    }
    f.open();
  }

  _onResize() {
    if (!this.camera) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}