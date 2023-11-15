import { FC } from 'react';
import './client-card.scss';
import QuotationMark from '../../../../components/shapes/quotation-mark/QuotationMark';
import { Direction } from '../../../../models/enums.app';
interface Props {
  name: string;
  content: string;
  pictureURL: string;
  pictureAlt: string;
}
const QUESTION_MARK_COLOR = '#B1E8DF';

const ClientCard: FC<Props> = ({ name, content, pictureURL, pictureAlt }) => {
  return (
    <>
      <div className='client-card'>
        <div className='client-card__quote'>
          <QuotationMark direction={Direction.Up} color={QUESTION_MARK_COLOR} />
          <p className='client-card__content'>{content}</p>
          <QuotationMark
            direction={Direction.Down}
            color={QUESTION_MARK_COLOR}
          />
        </div>

        <img className='client-card__image' src={pictureURL} alt={pictureAlt} draggable={false}/>
        <h3 className='client-card__name'>{name}</h3>
      </div>
    </>
  );
};

export default ClientCard;
