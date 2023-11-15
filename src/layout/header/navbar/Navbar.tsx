import { FC } from 'react';
import MainButton from '../../../components/buttons/MainButton';
import classNames from 'classnames';
import { HomepageSections } from '../../../models/enums.app';
import './navbar.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  onNavbarAsyncClick,
  onNavbarLinkClick,
} from '../../../utils/navigateUtils';
interface Props {
  className?: string;
  toggleMobileNavbar?: () => void;
}

const Navbar: FC<Props> = ({ className, toggleMobileNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname != '/';

  const navigateNotHome = async () => {
    const res = navigate('/');
    return res;
  };

  return (
    <div className={classNames('navbar', className)}>
      <div className='navbar__element'>
        {}
        <a
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Home,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Home, toggleMobileNavbar)
          }
          tabIndex={0}
        >
          Główna
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.About,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.About, toggleMobileNavbar)
          }
          tabIndex={0}
        >
          O nas
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Offer,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Offer, toggleMobileNavbar)
          }
          tabIndex={0}
          id='navbar__anchor'
        >
          Oferta
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Clients,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Clients, toggleMobileNavbar)
          }
          tabIndex={0}
        >
          Nasi Klienci
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() =>
            isHomePage
              ? onNavbarAsyncClick(
                  HomepageSections.Contact,
                  navigateNotHome,
                  toggleMobileNavbar
                )
              : onNavbarLinkClick(HomepageSections.Contact, toggleMobileNavbar)
          }
          tabIndex={0}
        >
          Kontakt
        </a>
      </div>
      <MainButton
        className='navbar__login-button'
        content={'Zaloguj się'}
        onClick={() => navigate('/login')}
      />
    </div>
  );
};

export default Navbar;
