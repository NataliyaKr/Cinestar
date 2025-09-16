import styles from "./homeHero.module.css";

export default function HomeHero({ heroImg, heroTitle, heroSubTitle }) {
  return (
    <header
      className={styles.homeHero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.homeHeroContent}>
        <h1 className={styles.homeTitle}>{heroTitle}</h1>
        <h2 className={styles.homeSubTitle}>{heroSubTitle}</h2>
        <p className={styles.homeText}>
          Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
          færdigt produkt leverer vi professionelle film- og tv-løsninger, der
          gør din historie uforglemmelig.
        </p>
      </div>
    </header>
  );
}
