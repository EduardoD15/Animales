// Punto de entrada de la aplicación

// Registrar rutas
router.addRoute('/', 'home-page');
router.addRoute('', 'home-page');
router.addRoute('/about', 'about-page');

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  router.init();
});