import { FC, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import NavbarMobile from './navbar/navbar-mobile/NavbarMobile';
import NavbarDesktop from './navbar/navbar-dekstop/NavbarDesktop';
import MediaHeader from './media-header/MediaHeader';
import Logotype from './logotype/Logotype';
import { FaBars } from 'react-icons/fa';
import './header.scss';

const TRANSITION_DURATION = 600;

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='header__container'>
        <MediaHeader className='header__media-desktop' />
        <div className='header__box'>
          <div className='header'>
            <Logotype
              className='header__logotype'
              isSecondNameVisible={false}
            />
            <NavbarDesktop />
            <button onClick={toggleNavbar} className='header__button'>
              <FaBars className='header__button-icon' />
            </button>

            <Transition
              nodeRef={nodeRef}
              in={isOpen}
              timeout={TRANSITION_DURATION}
            >
              {(state) => (
                <NavbarMobile
                  duration={TRANSITION_DURATION}
                  state={state}
                  toggleNavbar={toggleNavbar}
                />
              )}
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
