import styles from "./faqPage.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchFAQ from "../../hook/useFetchFAQ";
import Accordions from "../../components/accordions/Accordions";
import MediaCard from "../../components/mediaCard/MediaCard";

export default function FAQPage() {
  const { questions } = useFetchFAQ();
  return (
    <>
      <PageHeader path="faq" current="FAQ" />
      <article className={styles.qContainer}>
        <h2 className={styles.qTitle}>OFTE STILLEDE SPØRGSMÅL</h2>
        <h2 className={styles.qSubTitle}>
          DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR
        </h2>
        <p className={styles.qText}>
          Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores
          processer, tjenester og produktioner. Har du brug for yderligere
          information? Tøv ikke med at kontakte os!
        </p>
        {questions.map((q) => (
          <Accordions q={q} key={q._id} />
        ))}
      </article>
      <MediaCard />
    </>
  );
}
