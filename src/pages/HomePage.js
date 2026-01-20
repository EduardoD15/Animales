// Web Component: Página Home
class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.loadStyles();
    this.render();
  }

  loadStyles() {
    // Evitar cargar el CSS múltiples veces
    if (!document.getElementById('home-styles')) {
      const link = document.createElement('link');
      link.id = 'home-styles';
      link.rel = 'stylesheet';
      link.href = 'src/styles/home.css';
      document.head.appendChild(link);
    }
  }

  render() {
    this.innerHTML = `
      <div class="page home-page">
          <h2>Bienvenido al Home</h2>
          <p>Esta es la página principal de nuestra SPA con Vanilla JavaScript</p>
          <div class="card">
            <h3>Características</h3>
            <ul>
              <li>Router SPA</li>
              <li>Web Components</li>
              <li>JavaScript Vanilla</li>
            </ul>
          </div>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);