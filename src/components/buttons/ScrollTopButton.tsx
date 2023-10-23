import { FC } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { scrollToTop } from '../../utils/scrollUtils';
import './button-components.scss';

const ScrollTopButton: FC = () => {

  return (
    <button className='scroll-top-button' onClick={scrollToTop}>
      <FaArrowCircleUp className='scroll-top-button__icon' />
    </button>
  );
};

export default ScrollTopButton;
