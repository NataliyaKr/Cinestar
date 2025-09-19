import HomeHero from "../components/homeHero/HomeHero";
import heroImg from "../assets/images/studio.jpg";
import MediaCard from "../components/mediaCard/MediaCard";

const Home = () => {
  return (
    <article>
      <HomeHero heroImg={heroImg} heroTitle="Cinestar studio" />
      <MediaCard />
    </article>
  );
};

export default Home;
