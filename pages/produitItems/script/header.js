document.addEventListener("DOMContentLoaded", () => {
  createNavigation();
});

function createNavigation() {
  const header = document.createElement("header");
  header.innerHTML = ` <header class="py-3 border-bottom">
            <div class="container d-flex flex-wrap justify-content-center">
              <a
                href="/"
                class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
              >
                <span class="fs-4"> Dune Wave</span>
              </a>
              <ul class="nav">
                <li class="nav-item">
                  <a href="../monCompteConnection.html" class="nav-link link-body-emphasis px-2">Login</a>
                </li>
                <li class="nav-item">
                  <a href="../monCompteInscription.html" class="nav-link link-body-emphasis px-2">Sign up</a>
                </li>
                <li>
                  <a
                    href="../monCompte.html"
                    class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5577/5577995.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      class="rounded-circle"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <nav class="py-2 bg-body-tertiary border-bottom">
            <div class="container d-flex flex-wrap">
              <ul class="nav me-auto">
                <li class="nav-item">
                  <a
                    href="/"
                    class="nav-link link-body-emphasis px-2 active burger"
                    aria-current="page"
                  >
                  Home</a>
                </li>
                <li class="nav-item">
                  <a href="../locaboard.html" class="nav-link link-body-emphasis px-2">Locaboard</a>
                </li>
                <li class="nav-item">
                  <a
                    href="../produit.html"
                    class="nav-link link-body-emphasis px-2"
                    >Produits</a
                  >
                </li>
              </ul>
            </div>
          </nav>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.innerHTML = ` <footer
              class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
            >
              <p class="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
      
              <a
                href="/"
                class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                Dune Wave
              </a>
      
              <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item">
                  <a href="../CGU.html" class="nav-link px-2 text-body-secondary">CGU</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary"
                    >Nous Contacter</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary"
                    >Mentions Légales</a
                  >
                </li>
                <li class="nav-item">
                  <a href="../PolitiqueCookies.html" class="nav-link px-2 text-body-secondary"
                    >Politique Cookies</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 text-body-secondary">Plan Du Site</a>
                </li>
              </ul>
            </footer>`;
  document.body.append(footer);
}
