export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__info">
          <h1 className="hero__title">Discover the vast expanses of </h1>
          <h3 className="hero__subtitle">Where the possibilities are </h3>
          <button className="button hero__button">Learn more</button>
        </div>
        <img src={'/images/EARTH.png'} className="hero__img" />
      </div>
    </section>
  );
};
