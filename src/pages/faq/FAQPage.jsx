import styles from "./faqPage.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchFAQ from "../../hook/useFetchFAQ";
import Accordions from "../../components/accordions/Accordions";

export default function FAQPage() {
  const { questions } = useFetchFAQ();
  return (
    <>
      <PageHeader path="faq" current="FAQ" />
      <article className={styles.qContainer}>
        <h2>OFTE STILLEDE SPØRGSMÅL</h2>
        <h3>DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR</h3>
        <p>
          Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores
          processer, tjenester og produktioner. Har du brug for yderligere
          information? Tøv ikke med at kontakte os!
        </p>
        {questions.map((q) => (
          <Accordions q={q} key={q._id} />
        ))}
      </article>
    </>
  );
}
