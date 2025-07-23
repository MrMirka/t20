// src/main.js
import { SceneSetup } from './scene.js';

(async function() {
  const canvas = document.getElementById('webgl');
  const app    = new SceneSetup(canvas);

  // 1) настраиваем камеру и свет
  app.initCamera({ position: [0, 0, 0.36] });
  app.initLights();

  // 2) подписываемся на готовность модели
  app.onResourcesLoaded = group => {
    console.log('😊 Всё загрузилось, группа модели:', group);
    // здесь можно, например, начать анимацию или выполнить другие init-колбэки
  };

  // 3) грузим модель + текстуры
  app.loadModel(
    '/model/model.glb',
   '/textures/hand.png',
    {
      albedo:   '/model/albedo.jpg',
      normal:   '/model/normals.jpg',
      roughness:'/model/roughness.jpg',
    }
  );

  // 4) старт рендер-цикла
  app.render(() => {
    // любой код, который нужно исполнять каждый кадр
    // например, небольшое вращение:
    // if (app.card) app.card.group.rotation.y += 0.005;
  });
})();