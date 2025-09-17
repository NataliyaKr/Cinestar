import styles from "./homeHero.module.css";
import award1 from "../../assets/awards/award1.png";
import award2 from "../../assets/awards/award2.png";
import award3 from "../../assets/awards/award3.png";

export default function HomeHero({ heroImg, heroTitle }) {
  return (
    <header
      className={styles.homeHero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlayHome}></div>

      <div className={styles.homeHeroContent}>
        <h1 className={styles.homeTitle}>{heroTitle}</h1>
        <h2 className={styles.homeSubTitle}>Film & TV <span className={styles.heroTitleLight}>PRODUCTION</span></h2>
        <p className={styles.homeText}>
          Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
          færdigt produkt leverer vi professionelle film- og tv-løsninger, der
          gør din historie uforglemmelig.
        </p>

        <div className={styles.awards}>
          <div className={styles.awardItem}>
            <img src={award1} alt="award1" />
          </div>
          <div className={styles.awardItem}>
            <img src={award2} alt="award2" />
          </div>
          <div className={styles.awardItem}>
            <img src={award3} alt="award3" />
          </div>
        </div>
      </div>
    </header>
  );
}
