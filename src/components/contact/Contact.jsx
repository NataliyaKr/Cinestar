import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <article className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Kontakt</h2>
        <h2 className={styles.contactSubTitle}>TØV IKKE MED AT TAGE KONTAKT</h2>
        <p className={styles.contactText}>
          Har du spørgsmål eller brug for mere information om vores tjenester og
          processer? Vores team står klar til at hjælpe dig. Kontakt os, og lad
          os tage en uforpligtende samtale om dine behov og idéer.
        </p>
      </article>
    </>
  );
};

export default Contact;
