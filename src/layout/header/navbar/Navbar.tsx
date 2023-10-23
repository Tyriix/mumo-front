import { FC } from 'react';
import MainButton from '../../../components/buttons/MainButton';
import classNames from 'classnames';
import './navbar.scss';
import { scrollToSection } from '../../../utils/scrollUtils';
import { HomepageSections } from '../../../models/enums.app';

interface Props {
  className?: string;
}

const Navbar: FC<Props> = ({ className }) => {
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
          onClick={() => scrollToSection(HomepageSections.About)}
        >
          O nas
        </a>
      </div>
      <div className='navbar__element'>
        <a
          className='navbar__element-link'
          onClick={() => scrollToSection(HomepageSections.Offer)}
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
          onClick={() => scrollToSection(HomepageSections.Contact)}
        >
          Kontakt
        </a>
      </div>
      <MainButton className='navbar__login-button' content={'Zaloguj się'} />
    </div>
  );
};

export default Navbar;
