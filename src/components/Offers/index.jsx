import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CARDS } from './config';

export const OffersSection = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="container offers">
      <h2 className="title">Offers</h2>
      {CARDS.map((card, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url('${card.image}')`,
          }}
          className={`offers__card offers__card--${card.type}`}
        >
          <h4 className="offers__card_title">{card.title}</h4>
          <h5 className="offers__card_subtitle">{isDesktop ? card.subtitle : card.subtitle2}</h5>
          <button
            className="button button--outlined offers__card_button"
            onClick={() => console.log('go to link: ', card.link)}
          >
            Learn more
          </button>
        </div>
      ))}
    </section>
  );
};
