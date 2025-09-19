import Contact from "../../components/contact/Contact";
import PageHeader from "../../components/pageHeader/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader path="contact" current="KONTAKT" />
      <Contact />
    </>
  );
}
