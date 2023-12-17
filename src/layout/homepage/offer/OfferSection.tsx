import { FC } from 'react';
import './offer-section.scss';
import OfferCard from './offer-card/OfferCard';
import { HomepageSections } from '../../../models/enums/enums.app';

const HomeOfferSection: FC = () => {
  const offerCards = [
    {
      title: 'Zajęcia indywidualne',
      content: [
        'Zajęcia wprowadzające',
        'Zajęcia doszkalające',
        'Zajęcia sam na sam z instruktorem',
      ],
      priceContent: ['Wprowadzające - 250 zł', 'Inne indywidualne - 150 zł'],
    },
    {
      title: 'Zajęcia grupowe',
      content: [
        'Cykl zajęć grupowych w mieście',
        'Każdy cykl składa się z 8 zajęć grupowych. Pojedyncze zajęcia trwają 45 min',
        'Przed pierwszym cyklem obowiązek udziału w zajęciach wprowadzających',
      ],
      priceContent: ['Pierwszy cykl - 400 zł', 'Kolejny cykl - 300 zł'],
    },
    {
      title: 'Handling',
      content: [
        'Zajęcia indywidualne',
        'Zajęcia handlingowe w grupach',
        'Opieka na wystawie i wystawienie wyceniam indywidualnie',
      ],
      priceContent: [
        'Trening w grupie - 50 zł',
        'Indywidualny 20 min - 80 zł',
        'Wystawienia - od 200 zł',
      ],
    },
  ];

  return (
    <div className='offer' id={HomepageSections.Offer}>
      <h2 className='offer__header'>Oferta</h2>
      <div className='offer__cards-container'>
        {offerCards.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            content={offer.content}
            priceContent={offer.priceContent}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeOfferSection;
