class AppNav extends HTMLElement {
  constructor() {
    super();
    this.isExpanded = false;
  }

  connectedCallback() {
    this.loadStyles();
    this.render();
    this.setupClickOutside();
  }

  loadStyles() {
    if (!document.getElementById('nav-styles')) {
      const link = document.createElement('link');
      link.id = 'nav-styles';
      link.rel = 'stylesheet';
      link.href = 'src/styles/nav.css';
      document.head.appendChild(link);
    }
  }

  setupClickOutside() {
    document.addEventListener('click', (e) => {
      const navbar = this.querySelector('.navbar');
      if (this.isExpanded && navbar && !navbar.contains(e.target)) {
        this.toggleNavbar();
      }
    });
  }

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
    const navbar = this.querySelector('.navbar');
    const toggleIcon = this.querySelector('.nav-toggle i');
    
    if (this.isExpanded) {
      navbar.classList.add('expanded');
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-xmark');
    } else {
      navbar.classList.remove('expanded');
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    }
  }

  render() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="nav-brand">
          <button class="nav-toggle">
            <i class="fa-solid fa-bars"></i>
          </button>
          <h1 class="nav-title">Animals</h1>
        </div>
        
        <ul class="nav-categories">
          <li><i class="fa-solid fa-paw"></i><span>Mamíferos</span></li>
          <li><i class="fa-solid fa-crow"></i><span>Aves</span></li>
          <li><i class="fa-solid fa-fish"></i><span>Peces</span></li>
          <li><i class="fa-solid fa-dragon"></i><span>Reptiles</span></li>
          <li><i class="fa-solid fa-frog"></i><span>Anfibios</span></li>
          <li><i class="fa-solid fa-spider"></i><span>Invertebrados</span></li>
          <li><i class="fa-solid fa-mountain-sun"></i><span>Paisajes</span></li>
        </ul>

        <ul class="nav-links">
          <li><a href="#/contact" data-link><i class="fa-solid fa-user"></i><span>Contact</span></a></li>
        </ul>
      </nav>
    `;

    const toggleBtn = this.querySelector('.nav-toggle');
    toggleBtn.addEventListener('click', () => this.toggleNavbar());
  }
}

customElements.define('app-nav', AppNav);