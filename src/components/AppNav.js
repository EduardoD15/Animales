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
        
        <ul class="nav-categories">
          <li><i class="fa-solid fa-paw"></i> Mamíferos</li>
          <li><i class="fa-solid fa-crow"></i> Aves</li>
          <li><i class="fa-solid fa-fish"></i> Peces</li>
          <li><i class="fa-solid fa-dragon"></i> Reptiles</li>
          <li><i class="fa-solid fa-frog"></i> Anfibios</li>
          <li><i class="fa-solid fa-spider"></i> Invertebrados</li>
          <li><i class="fa-solid fa-mountain-sun"></i> Paisajes</li>
        </ul>

        <ul class="nav-links">
          <li><a href="#/contact" data-link>Contact</a></li>
        </ul>
      </nav>
    `;
  }
}

// Registrar el componente
customElements.define('app-nav', AppNav);