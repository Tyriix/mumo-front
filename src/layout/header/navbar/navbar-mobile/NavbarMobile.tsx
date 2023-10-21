import { FC, useEffect } from 'react';
import './navbar-mobile.scss';
import { TransitionStatus } from 'react-transition-group';
import classNames from 'classnames';
import Navbar from '../Navbar';
import MediaHeader from '../../media-header/MediaHeader';

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
      className='header__nav'
      style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
    >
      <button
        onClick={toggleNavbar}
        className={classNames('header__hamburger-icon')}
      >
        X
      </button>
      <Navbar />
      <MediaHeader />
    </div>
  );
};

export default NavbarMobile;
