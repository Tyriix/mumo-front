import { FC } from 'react';
import MainButton from '../../../components/buttons/MainButton';
import classNames from 'classnames';
import { scrollToSection } from '../../../utils/scrollUtils';
import { HomepageSections } from '../../../models/enums.app';
import './navbar.scss';

interface Props {
  className?: string;
  toggleMobileNavbar?: () => void;
}

const Navbar: FC<Props> = ({ className, toggleMobileNavbar }) => {
  const onNavbarLinkClick = (section: string) => {
    if (toggleMobileNavbar) toggleMobileNavbar();
    scrollToSection(section);
  };

  return (
    <div className={classNames('navbar', className)}>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.About)}
          tabIndex={0}
        >
          Główna
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.About)}
          tabIndex={0}
        >
          O nas
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.Offer)}
          tabIndex={0}
        >
          Oferta
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.Clients)}
          tabIndex={0}
        >
          Nasi Klienci
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.Contact)}
          tabIndex={0}
        >
          Kontakt
        </a>
      </div>
      <MainButton className='navbar__login-button' content={'Zaloguj się'} />
    </div>
  );
};

export default Navbar;
