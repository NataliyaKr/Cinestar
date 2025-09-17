import HomeHero from "../components/homeHero/HomeHero";
import heroImg from "../assets/images/studio.jpg";

const Home = () => {
  return (
    <article>
      <HomeHero heroImg={heroImg} heroTitle="Cinestar studio" />
    </article>
  );
};

export default Home;
