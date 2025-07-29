// src/main.js
import { SceneSetup } from './scene.js';

(async function () {
  const canvas = document.getElementById('webgl');
  const app = new SceneSetup(canvas);

  const isMobile = false
  // 1) настраиваем камеру и свет
  app.initCamera({ position: [0, 0, 0.23] });
  app.initLights();

  // 2) подписываемся на готовность модели
  app.onResourcesLoaded = group => {
    console.log('😊 Всё загрузилось, группа модели:', group);
    document.getElementById('playBtn').onclick = () => app.card.play();

  };

  app.loadEnvironment('light/GSG_ProStudiosMetal_Vol2_23_Env_sm.exr', () => {
    console.log('🗺️ Карта окружения загружена!');
  });

  // 3) грузим модель + текстуры
  app.loadModel(
    'model/model2.glb',
    'pack1'
  );


  // 4) Вращение модели в зависимочти от положения курсора
  let mouseX = 0;
  const windowHalfX = window.innerWidth / 2;
  let targetRotationY = 0;
  const rotationSpeed = 0.5;

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / windowHalfX;
    targetRotationY = mouseX * rotationSpeed;
  }

  document.addEventListener('mousemove', onDocumentMouseMove);


  // 4) старт рендер-цикла
  app.render(() => {
    if (app.card) {
      if (isMobile) {
         
      } else {
        let inertion = 0.05
        app.card.group.rotation.y += (targetRotationY - app.card.group.rotation.y) * inertion;
      }

    }
  });
})();