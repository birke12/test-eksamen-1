import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-overlay ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogPages" onClick={toggleMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/backoffice" onClick={toggleMenu}>
                Backoffice
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={toggleMenu}>
                FAQ
              </Link>
            </li>

            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
