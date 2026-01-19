// Router simple para SPA
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    // Detectar la base del proyecto (para GitHub Pages)
    this.basePath = this.detectBasePath();
    
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

  // Detectar la base del proyecto
  detectBasePath() {
    const pathname = window.location.pathname;
    // Si contiene /Animales/, es GitHub Pages
    if (pathname.includes('/Animales/')) {
      return '/Animales';
    }
    // Si contiene /project/, es Live Server
    if (pathname.includes('/project/')) {
      return '/project';
    }
    return '';
  }

  // Registrar una ruta
  addRoute(path, component) {
    this.routes[path] = component;
  }

  // Navegar a una ruta
  navigateTo(path) {
    window.history.pushState(null, null, this.basePath + path);
    this.handleRoute();
  }

  // Manejar la ruta actual
  handleRoute() {
    // Obtener el hash y limpiar la barra inicial si existe
    let path = window.location.hash.slice(1); // Quitar el #
    if (!path || path === '') {
      path = '/';
    }
    
    console.log('Hash actual:', window.location.hash);
    console.log('Ruta limpia:', path);
    console.log('Rutas disponibles:', this.routes);
    
    const component = this.routes['#' + path] || this.routes['#/'] || this.routes['#/404'];
    
    if (component) {
      this.currentRoute = path;
      this.render(component);
    } else {
      console.warn('Componente no encontrado para la ruta:', path);
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