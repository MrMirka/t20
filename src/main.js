// src/main.js
import { SceneSetup } from './scene.js';
import { gsap } from 'gsap';
import {UAParser} from 'ua-parser-js';


(async function () {
  const canvas = document.getElementById('webgl');

  const parser = new UAParser();
  const result = parser.getResult();

  const isMobile = result.device.type === 'mobile';
  const app = new SceneSetup(canvas, isMobile);


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

  // 5) Вращение модель при касании
  if (app.isMobile) {
    const rotationAngle = 15 * (Math.PI / 180); // 15 градусов в радианах

    /**
     * Обрабатывает движение пальца по экрану.
     * Функция определяет, на какой половине экрана находится палец,
     * и анимирует поворот модели в соответствующую сторону.
     */
    function onTouchMove(event) {
      // Проверяем, что модель загружена
      if (!app.card) return;

      const touchX = event.touches[0].clientX;
      const screenWidth = window.innerWidth;

      // Определяем целевой угол в зависимости от положения пальца
      const targetAngle = (touchX < screenWidth / 2) ? -rotationAngle : rotationAngle;

      // Анимируем к целевому углу. 
      // GSAP автоматически прервёт предыдущую анимацию на этом же свойстве.
      gsap.to(app.card.group.rotation, {
        y: targetAngle,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto' // Явно указываем для ясности
      });
    }

    /**
     * Обрабатывает окончание касания, возвращая модель в исходное положение.
     */
    function onTouchEnd() {
      // Проверяем, что модель загружена
      if (!app.card) return;

      // Плавно возвращаем модель в центр
      gsap.to(app.card.group.rotation, {
        y: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    }

    // Удаляем слушатель 'touchstart' и добавляем 'touchmove'
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd);

    // Также рекомендуется обрабатывать событие отмены касания (например, если палец ушел за пределы окна)
    document.addEventListener('touchcancel', onTouchEnd);
  }


  // 6) старт рендер-цикла
  app.render(() => {
    if (app.card) {
      if (app.isMobile) {

      } else {
        let inertion = 0.05
        app.card.group.rotation.y += (targetRotationY - app.card.group.rotation.y) * inertion;
      }

    }
  });
})();


