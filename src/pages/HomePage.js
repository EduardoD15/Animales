// Web Component: Página Home
class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
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