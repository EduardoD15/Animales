// Router simple para SPA con lazy loading
class Router {
  constructor() {
    this.routes = {};
    this.loadedComponents = new Set(); // Rastrear componentes ya cargados
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

  // Registrar una ruta con lazy loading
  addRoute(path, component, scriptPath = null) {
    this.routes[path] = {
      component: component,
      scriptPath: scriptPath // Ruta del archivo JS del componente
    };
  }

  // Cargar dinámicamente un componente
  async loadComponent(scriptPath) {
    return new Promise((resolve, reject) => {
      if (this.loadedComponents.has(scriptPath)) {
        // Si ya está cargado, resolver inmediatamente
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = scriptPath;
      script.onload = () => {
        this.loadedComponents.add(scriptPath);
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Error al cargar: ${scriptPath}`));
      };
      document.body.appendChild(script);
    });
  }

  // Navegar a una ruta
  navigateTo(path) {
    window.history.pushState(null, null, this.basePath + path);
    this.handleRoute();
  }

  // Manejar la ruta actual (con lazy loading)
  async handleRoute() {
    // Obtener el hash y limpiar la barra inicial si existe
    let path = window.location.hash.slice(1); // Quitar el #
    if (!path || path === '') {
      path = '/';
    }
    
    console.log('Hash actual:', window.location.hash);
    console.log('Ruta limpia:', path);
    
    const routeKey = '#' + path;
    const routeConfig = this.routes[routeKey] || this.routes['#/'] || this.routes['#/404'];
    
    if (routeConfig) {
      try {
        // Cargar el componente si tiene un scriptPath
        if (routeConfig.scriptPath) {
          await this.loadComponent(routeConfig.scriptPath);
        }
        this.currentRoute = path;
        this.render(routeConfig.component);
      } catch (error) {
        console.error('Error al cargar la ruta:', error);
      }
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