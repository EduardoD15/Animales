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
      <div >
          <div class="home--content">
            
            <div class="content--grid">

              <div class="grid--1-1-2">
                <div class="grid--content-1">
                  <i class="fa-solid fa-paw grid-icono"></i>
                  <h2 class="grid-natural"> Natural Wildlife</h2>          

                </div>
              </div>
              <div class="grid--2-2-1">
                  <h3 class="grid-explore"> EXPLORE THE REAL</h2>
                  <h1 class="grid-wild">WILDLIFE</h1>
              </div>

              <div class="grid--3">
              
                <div class="grid--content-2">

                    <div class="content-panter">
                    <h2 class="panter-h2">Panthera uncia</h2>
                    <h2 class="panter-h2">(Snow Leopard) (Ounce)</h2>
                    </div>

                    <div>
                    <h4 class="Himalaya">Adventure in Himalaya</h4>
                    <h5 class="life">Life of India</h5>
                    
                    <p class="paraffo">The snow leopard's fur is whitish to grey with black spots on head and neck, with larger rosettes on the back, flanks and bushy tail. The belly is whitish. Its eyes are pale green or grey in color. Its muzzle is short and its forehead domed. Its nasal cavities are large. </p>

                     <button>Saber mas</button> 

                      <div class="flex-content">
                        <div class="content-p">
                        <p class="content-pp">40 mph</p>
                        <p class="content-ss">Top speed</p>
                        </div>
                        <div class="content-p">
                        <p class="content-pp">40 mph</p>
                        <p class="content-ss">Top speed</p>
                        </div>
                        <div class="content-p">
                        <p class="content-pp">40 mph</p>
                        <p class="content-ss">Top speed</p>
                        </div>
                      </div>
                      

                    </div>

                </div>
              </div>

            </div>

            <div class="luces"></div>

          </div>
          
          </div>
              <div class="card">
                <h2>Bienvenido al Home</h2>
                <p>Esta es la página principal de nuestra SPA con Vanilla JavaScript</p>
                  <h3>Características</h3>
                  <ul>
                    <li>Router SPA</li>
                    <li>Web Components</li>
                    <li>JavaScript Vanilla</li>
                  </ul>
          </div>
      </div>
       
    </div>
    `;
  }
}

customElements.define('home-page', HomePage);