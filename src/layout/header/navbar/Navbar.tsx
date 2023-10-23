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
        <a className='navbar__element-link' href='#'>
          Główna
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.About)}
        >
          O nas
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.Offer)}
        >
          Oferta
        </a>
      </div>
      <div className='navbar__element'>
        <a className='navbar__element-link'>Nasi Klienci</a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => onNavbarLinkClick(HomepageSections.Contact)}
        >
          Kontakt
        </a>
      </div>
      <MainButton className='navbar__login-button' content={'Zaloguj się'} />
    </div>
  );
};

export default Navbar;
