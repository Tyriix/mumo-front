import { FC, useEffect } from 'react';
import { TransitionStatus } from 'react-transition-group';
import Navbar from '../Navbar';
import MediaHeader from '../../media-header/MediaHeader';
import Logotype from '../../logotype/Logotype';
import { FaTimes } from 'react-icons/fa';
import './navbar-mobile.scss';

interface Props {
  duration: number;
  state: TransitionStatus;
  toggleNavbar: () => void;
}

const useLockScroll = (state: TransitionStatus) => {
  useEffect(() => {
    if (state === 'entered') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflowY = 'scroll';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflowY = 'auto';
    }
  }, [state]);
};

const NavbarMobile: FC<Props> = ({ duration, state, toggleNavbar }) => {
  useLockScroll(state);

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
  };

  const transitionStyles: { [key: string]: React.CSSProperties } = {
    entering: { transform: 'translateX(-100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(-100%)' },
  };

  return (
    <div
      className='menu-mobile'
      style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
    >
      <div className='menu-mobile__box'>
        <button onClick={toggleNavbar} className='menu-mobile__close-button'>
          <FaTimes className='menu-mobile__close-icon' aria-label='Close navbar button' />
        </button>
        <Logotype
          className='menu-mobile__logotype'
          isFirstNameVisible={false}
          isSecondNameVisible={false}
        />
        <Navbar toggleMobileNavbar={toggleNavbar} />
      </div>
      <MediaHeader />
    </div>
  );
};

export default NavbarMobile;
