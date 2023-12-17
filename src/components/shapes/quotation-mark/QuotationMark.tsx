import { FC } from 'react';
import { Direction } from '../../../models/enums/enums.app';
import '../quotation-mark/quotation-mark.scss';

interface Props {
  direction: Direction;
  color: string;
}

const QuotationMark: FC<Props> = ({ direction, color }) => {
  return (
    <svg
      className={`quotation-mark__${direction}`}
      xmlns='http://www.w3.org/2000/svg'
      width='63'
      height='54'
      viewBox='0 0 63 54'
      role='img'
    >
      <path
        opacity='0.539615'
        d='M62.2019 0V9.64764C57.1242 10.4939 53.5698 12.2711 51.5387 14.9792C49.5077 17.6873 48.4921 22.5112 48.4921 29.4507H61.4403V53.5698H36.5595V33.259C36.5595 22.7651 38.506 14.6407 42.3989 8.88598C46.2918 2.96199 52.8928 0 62.2019 0ZM25.6424 0V9.64764C20.5647 10.4939 17.0103 12.2711 14.9792 14.9792C12.9482 17.6873 11.9326 22.5112 11.9326 29.4507H24.8808V53.5698H0L0 33.259C0 22.7651 1.94645 14.6407 5.83937 8.88598C9.73228 2.96199 16.3333 0 25.6424 0Z'
        fill={color}
        fillOpacity='0.7'
      />
    </svg>
  );
};

export default QuotationMark;
