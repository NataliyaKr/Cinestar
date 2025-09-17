import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="cinestar_logo" />
      </NavLink>
      <div className="burger_menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={34} /> : <GiHamburgerMenu />}
      </div>
      <ul
        onClick={toggleMenu}
        className={isOpen ? "nav_links open" : "nav_links"}
      >
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
