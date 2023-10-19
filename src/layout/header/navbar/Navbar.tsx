import { FC } from 'react';
import MainButton from '../../../components/buttons/MainButton';
import './navbar.scss';
import classNames from 'classnames';

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
        <a className='navbar__element-link' href='#'>
          O nas
        </a>
      </div>
      <div className='navbar__element'>
        <a className='navbar__element-link' href='#'>
          Oferta
        </a>
      </div>
      <div className='navbar__element'>
        <a className='navbar__element-link' href='#'>
          Nasi Klienci
        </a>
      </div>
      <div className='navbar__element'>
        <a className='navbar__element-link' href='#'>
          Kontakt
        </a>
      </div>
      <MainButton content={'Zaloguj się'} />
    </div>
  );
};

export default Navbar;
