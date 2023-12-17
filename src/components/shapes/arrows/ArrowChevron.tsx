import { FC } from 'react';
import { Direction } from '../../../models/enums/enums.app';
import '../arrows/arrow-shapes.scss';

interface Props {
  direction: Direction;
  color: string;
}

const ArrowChevron: FC<Props> = ({ direction, color }) => {
  return (
    <svg
      className={`arrow-chevron__${direction}`}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      role='img'
    >
      <title>Arrow to expand or collapse text</title>
      <path
        d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z'
        fill={color}
      />
    </svg>
  );
};

export default ArrowChevron;
