import styles from "./mediaCard.module.css";

const MediaCard = () => {
  return (
    <figure className={styles.mediaContainer}>
      <h2 className={styles.mediaTitle}>Har du en ide i tankerne?</h2>
      <h2 className={styles.mediaTitle}>Lad os starte dit projekt sammen</h2>

      <div className={styles.mediaInfo}>
        <p className={styles.studio}>Cinestar Studio</p>
        <p className={styles.phone}>+45 12 34 56 78</p>
        <p className={styles.email}>cinestar@production.dk</p>
      </div>

      <div className={styles.socialsMedia}>
        <a href="#">FACEBOOK</a>
        <a href="#">TWITTER</a>
        <a href="#">LINKEDIN</a>
        <a href="#">INSTAGRAM</a>
        <a href="#">YOUTUBE</a>
      </div>
    </figure>
  );
};

export default MediaCard;
