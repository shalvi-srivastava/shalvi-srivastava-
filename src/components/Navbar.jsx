export default function Navbar() {
  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-expand-lg border-bottom fixed-top "
    >
      <div className="container p-2">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          Shalvi Srivastava<span className="text-primary">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ms-auto"
            onClick={(e) => {
              if (window.innerWidth < 992) {
                const navbar = document.getElementById(
                  "navbarSupportedContent",
                );
                navbar?.classList.remove("show");
              }
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
