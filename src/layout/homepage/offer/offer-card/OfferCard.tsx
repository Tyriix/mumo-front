import { FC } from 'react';
import './offer-card.scss';

interface Props {
  title: string;
  content: string[];
  priceContent: string[];
}

const OfferCard: FC<Props> = ({ title, content, priceContent }) => {
  return (
    <div className='offer-card'>
      <h3 className='offer-card__header'>{title}</h3>
      {content.map((paragraph, index) => (
        <p className='offer-card__content' key={index}>
          {paragraph}
        </p>
      ))}
      <div className='offer-card__price'>
        {priceContent.map((paragraph, index) => (
          <p className='offer-card__price-content' key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
