import { FC, useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { scrollToTop } from '../../utils/scroll.utils';
import './button-components.scss';
import classNames from 'classnames';

const ScrollTopButton: FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={classNames('scroll-top-button', showButton && 'show-button')}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp
        className='scroll-top-button__icon'
        aria-label='Scroll to top button'
      />
    </button>
  );
};

export default ScrollTopButton;
