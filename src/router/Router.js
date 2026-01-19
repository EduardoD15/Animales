// Router simple para SPA
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
    // Escuchar cambios en la URL
    window.addEventListener('popstate', () => this.handleRoute());
    
    // Interceptar clicks en enlaces
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(e.target.getAttribute('href'));
      }
    });
  }

  // Registrar una ruta
  addRoute(path, component) {
    this.routes[path] = component;
  }

  // Navegar a una ruta
  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.handleRoute();
  }

  // Manejar la ruta actual
  handleRoute() {
    const path = window.location.pathname;
    const component = this.routes[path] || this.routes['/404'];
    
    if (component) {
      this.currentRoute = path;
      this.render(component);
    }
  }

  // Renderizar el componente
  render(component) {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = `<${component}></${component}>`;
  }

  // Iniciar el router
  init() {
    this.handleRoute();
  }
}

// Instancia global del router
const router = new Router();