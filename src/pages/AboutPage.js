// Web Component: Página About
class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.loadStyles();
    this.render();
  }

  loadStyles() {
    // Evitar cargar el CSS múltiples veces
    if (!document.getElementById('about-styles')) {
      const link = document.createElement('link');
      link.id = 'about-styles';
      link.rel = 'stylesheet';
      link.href = 'src/styles/about.css';
      document.head.appendChild(link);
    }
  }

  render() {
    this.innerHTML = `
      <div class="page about-page">
        <h2>Acerca de Nosotros</h2>
        <p>Esta página muestra información sobre el proyecto</p>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPage);