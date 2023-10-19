import { FC, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import './header.scss';
import classNames from 'classnames';
import NavbarMobile from './navbar/navbar-mobile/NavbarMobile';
import NavbarDesktop from './navbar/navbar-dekstop/NavbarDesktop';
import MediaHeader from './media-header/MediaHeader';

const TRANSITION_DURATION = 300;

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='header__container'>
        <MediaHeader className='header__media' />
        <div className='header__box'>
          <div className='header'>
            <div className='header__logo'>
              <img
                className='header__logo-img'
                src='/src/assets/images/logo-bg-01.png'
                alt='Logo Mumo pozytywne szkolenie psów'
              />
              <div className='header__logo-name'>
                <p className='header__logo-name-child'>Mumo</p>
                <p className='header__logo-name-child'>
                  pozytywne szkolenie psów
                </p>
              </div>
            </div>
            <NavbarDesktop />
            <button
              onClick={toggleNavbar}
              className={classNames(
                'header__hamburger-icon',
                isOpen && 'header__close-icon'
              )}
            ></button>
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
