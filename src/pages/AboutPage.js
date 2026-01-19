// Web Component: Página About
class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
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