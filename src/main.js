// src/main.js
import { SceneSetup } from './scene.js';

(async function() {
  const canvas = document.getElementById('webgl');
  const app    = new SceneSetup(canvas);

  // 1) настраиваем камеру и свет
  app.initCamera({ position: [0, 0, 0.23] });
  app.initLights();

  // 2) подписываемся на готовность модели
  app.onResourcesLoaded = group => {
    console.log('😊 Всё загрузилось, группа модели:', group);
    document.getElementById('playBtn').onclick = () => app.card.play();

  };

    app.loadEnvironment('/light/GSG_ProStudiosMetal_Vol2_23_Env_sm.exr', () => {
    console.log('🗺️ Карта окружения загружена!');
  }); 

  // 3) грузим модель + текстуры
  app.loadModel(
    '/model/model.glb',
   'pack1'
  );



  // 4) старт рендер-цикла
  app.render(() => {
    // любой код, который нужно исполнять каждый кадр
    // например, небольшое вращение:
    // if (app.card) app.card.group.rotation.y += 0.005;
  });
})();