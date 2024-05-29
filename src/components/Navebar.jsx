import { useState } from "react";

function Navebar() {

    const [scrollNav, setScrollNav] = useState(false);

  let links = [
    "Home",
    "About",
    "Services",
    "Credo",
    "Photography",
    "Blog",
    "Contact",
  ];

  window.addEventListener("scroll", () => {
      if(window.scrollY > 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
  })

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${ (scrollNav == true) ? 'scrollingNav': ''} `}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0  d-flex gap-5 ">
                          
              {links.map(function (menu) {
                return (
                  <li className="nav-item">
                    {menu == "Credo" ? (
                      <a
                        className="navbar-brand text-white fs-3 fw-bold"
                        href="#"
                      >
                        {menu}
                      </a>
                    ) : (
                      <a
                        className="nav-link text-white"
                        aria-current="page"
                        href={`#${menu}`}
                      >
                        {menu}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navebar;
