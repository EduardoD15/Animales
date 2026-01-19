// Web Component: Navegación
class AppNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-brand">
          <h1>Mi App</h1>
        </div>
        <ul class="nav-links">
          <li><a href="/" data-link>Home</a></li>
          <li><a href="/about" data-link>About</a></li>
          <li><a href="/contact" data-link>Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

// Registrar el componente
customElements.define('app-nav', AppNav);