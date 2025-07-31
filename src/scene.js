import * as THREE from 'three';
import GUI from 'lil-gui';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { CardBox } from './cardbox.js';
import { gsap } from 'gsap';

const RESOLUTION = window.devicePixelRatio || 1;

const packTextures = {
  'pack1': {
    albedo: 'textures/pack1/Package_01_Card_2048x2048px_Albedo_01.png',
    normal: 'textures/pack1/Package_01_Card_2048x2048px_Normal_01.png',
    roughness: 'textures/pack1/Package_01_Card_2048x2048px_Roughness_01.png',
  },
  'pack3': {
    albedo: 'textures/pack3/Package_03_Cards_2048x2048px_Albedo_01.png',
    normal: 'textures/pack3/Package_03_Cards_2048x2048px_Normal_01.png',
    roughness: 'textures/pack3/Package_03_Cards_2048x2048px_Roughness_01.png',
  },
  'pack20': {
    albedo: 'textures/pack20/Package_20_Cards_2048x2048px_Albedo_01.png',
    normal: 'textures/pack20/Package_20_Cards_2048x2048px_Normal_01.png',
    roughness: 'textures/pack20/Package_20_Cards_2048x2048px_Roughness_01.png',
  },
  'pack80': {
    albedo: 'textures/pack80/Package_80_Cards_2048x2048px_Albedo_01.png',
    normal: 'textures/pack80/Package_80_Cards_2048x2048px_Normal_01.png',
    roughness: 'textures/pack80/Package_80_Cards_2048x2048px_Roughness_01.png',
  }
};

const SceneConfig = {
  showGUI: true,
  packName: 'pack1',
  environment: {
    intensity: 3.0,
    rotation: { x: 0, y: 0.4, z: 0 },
  },
  camera: {
    position: { x: 0, y: 0, z: 0.2 },
  },
  directionalLight: {
    color: '#ffffff',
    intensity: 0.1,
    position: { x: 1.5, y: -1.1, z: 4.1 },
  },
  pointLight: {
    color: '#ffffff',
    intensity: 0.1,
    position: { x: 0.2, y: 0.2, z: 0.2 },
  }
};




export class SceneSetup {
  constructor(canvas, isMobile) {
    this.canvas = canvas;
    this.config = JSON.parse(JSON.stringify(SceneConfig));
    this.isMobile = isMobile;
    this.scene = new THREE.Scene();

    this.clock = new THREE.Clock();

     this.config = JSON.parse(JSON.stringify(SceneConfig));

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
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
    this.pointLight = null;
   

    this.params = {
      showGUI: true,
      packName: null,
      environmentIntensity: 3.0,
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
    const dirConfig = this.config.directionalLight;
    this.directionalLight = new THREE.DirectionalLight(dirConfig.color, dirConfig.intensity);
    this.directionalLight.position.set(dirConfig.position.x, dirConfig.position.y, dirConfig.position.z);
    this.scene.add(this.directionalLight);

    const pointConfig = this.config.pointLight;
    this.pointLight = new THREE.PointLight(pointConfig.color, pointConfig.intensity);
    this.pointLight.position.set(pointConfig.position.x, pointConfig.position.y, pointConfig.position.z);
    this.scene.add(this.pointLight);
  }

  loadEnvironment(url, onLoaded) {
    this.envMapUrl = url;
    const exrLoader = new EXRLoader();
    exrLoader.load(url, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.LinearSRGBColorSpace;
      this.scene.environment = texture;
       this.scene.environmentIntensity = this.config.environment.intensity;
      this.scene.environmentRotation.set(
        this.config.environment.rotation.x,
        this.config.environment.rotation.y,
        this.config.environment.rotation.z
      );

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
      this._addLightUI('DirectionalLight',  this.directionalLight, this.config.directionalLight);
    }
    if (this.pointLight) {
      this._addLightUI('PointLight', this.pointLight, this.config.pointLight);
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
    gsap.ticker.add(() => {
      const deltaTime = this.clock.getDelta() * 1.2;
      if (this.card) {
        this.card.update(deltaTime);
      }

      if (update) {
        update();
      }
      this.renderer.render(this.scene, this.camera);
    });
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
    const envConfig = this.config.environment;

    f.add(envConfig, 'intensity', 0, 4, 0.1)
      .name('Intensity')
      .onChange(value => {
        if (this.scene.environment) this.scene.environmentIntensity = value;
      });

    f.add(envConfig.rotation, 'x', 0, Math.PI * 2, 0.01).name('Rotation X')
      .onChange(v => this.scene.environmentRotation.x = v);
    f.add(envConfig.rotation, 'y', 0, Math.PI * 2, 0.01).name('Rotation Y')
      .onChange(v => this.scene.environmentRotation.y = v);
    f.add(envConfig.rotation, 'z', 0, Math.PI * 2, 0.01).name('Rotation Z')
      .onChange(v => this.scene.environmentRotation.z = v);

    f.open();
  }

  _addCameraUI() {
    const camF = this.gui.addFolder('Camera');
    ['x', 'y', 'z'].forEach(axis => {
      camF.add(this.camera.position, axis, -10, 10, 0.1).name(`pos ${axis}`).listen();
    });
    camF.open();
  }



    _addLightUI(name, light, lightConfig) {
    const f = this.gui.addFolder(name);
    console.log(lightConfig)
    f.addColor(lightConfig, 'color').name('Color')
      .onChange(c => light.color.set(c));

    f.add(lightConfig, 'intensity', 0, 10, 0.01).name('Intensity')
      .onChange(v => light.intensity = v);

    const posConfig = lightConfig.position;
    f.add(posConfig, 'x', -20, 20, 0.1).name('pos x').onChange(v => light.position.x = v);
    f.add(posConfig, 'y', -20, 20, 0.1).name('pos y').onChange(v => light.position.y = v);
    f.add(posConfig, 'z', -20, 20, 0.1).name('pos z').onChange(v => light.position.z = v);

    f.open();
  }

  _onResize() {
    if (!this.camera) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}