import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Crafting project specific solutions with expertise.</h1>
        <h3>
          We're a creative company that focuses on establishing long-term
          relationships with customers.
        </h3>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Now</button>
          <button className="btn-outline">Contact us</button>
        </div>
      </div>
      <div className="hero-right">
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
