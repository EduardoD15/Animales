// Punto de entrada de la aplicación con lazy loading

// Registrar rutas con lazy loading
// El Home se carga al inicio
router.addRoute('#/', 'home-page', 'src/pages/HomePage.js');
router.addRoute('#/home', 'home-page', 'src/pages/HomePage.js');

// Otras páginas se cargan bajo demanda
router.addRoute('#/about', 'about-page', 'src/pages/AboutPage.js');

// Cargar el componente Home al inicio para que esté listo
const preloadHome = async () => {
  try {
    await router.loadComponent('src/pages/HomePage.js');
    console.log('✓ HomePage precargado');
  } catch (error) {
    console.error('Error al precargar HomePage:', error);
  }
};

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', async () => {
  await preloadHome();
  router.init();
});