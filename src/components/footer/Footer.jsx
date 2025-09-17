import styles from "./footer.module.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = ({ footerImg }) => {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className={styles.overlay}></div>
      <figure className={styles.footerContainer}>
        <NavLink to="/">
          <img src={logo} alt="cinestar_logo" />
        </NavLink>

        <figcaption>
          <p className={styles.footerText}>
            {" "}
            Copyright 202 © Cinestar | powered by Romethem E Studio
          </p>
        </figcaption>
      </figure>
    </footer>
  );
};

export default Footer;
