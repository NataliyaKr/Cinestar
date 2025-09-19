import HomeHero from "../components/homeHero/HomeHero";
import heroImg from "../assets/images/studio.jpg";
import MediaCard from "../components/mediaCard/MediaCard";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <article>
      <HomeHero heroImg={heroImg} heroTitle="Cinestar studio" />
      <Contact />
      <MediaCard />
    </article>
  );
};

export default Home;
