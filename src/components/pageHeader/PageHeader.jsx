import styles from "./pageHeader.module.css";
import studioImg from "../../assets/images/studio.jpg";
import { NavLink } from "react-router-dom";

const pageConfig = {
  blog: { title: "BLOG ARKIV", path: "/blog" },
  faq: { title: "FAQ", path: "/faq" },
  kontakt: { title: "KONTAKT", path: "/contact" },
};

const PageHeader = ({ page, current }) => {
  const { title, path } = pageConfig[page] || { title: "", path: "/" };
  return (
    <header className={styles.pageHeader}>
      <img src={studioImg} alt="studio" className={styles.studioImage} />
      <div className={styles.overlay}>
        <div className={styles.infoHeader}>
          <h1 className={styles.titleHeader}>{current ? current : title}</h1>
          <p className={styles.linkHeader}>
            <NavLink to="/" className={styles.navWhite}>
              Forside /
            </NavLink>
            <NavLink to={path} className={styles.navOrange}>
              {title}
            </NavLink>
            <>
              {""} <span className={styles.navOrange}>{current}</span>
            </>
          </p>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
