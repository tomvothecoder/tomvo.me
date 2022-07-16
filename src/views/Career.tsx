import Experience from "components/Career/Experience/Experience";
import Hero from "components/Career/Hero";
import "views/Career.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Experience />
    </div>
  );
}

export default Home;
