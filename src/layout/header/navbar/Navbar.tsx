import { FC } from 'react';
import MainButton from '../../../components/buttons/MainButton';

const Navbar: FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar__element'>
        <a href='#'>Główna</a>
      </div>
      <div className='navbar__element'>
        <a href='#'>O nas</a>
      </div>
      <div className='navbar__element'>
        <a href='#'>Oferta</a>
      </div>
      <div className='navbar__element'>
        <a href='#'>Nasi Klienci</a>
      </div>
      <div className='navbar__element'>
        <a href='#'>Kontakt</a>
      </div>
      <MainButton content={'Zaloguj się'} />
    </div>
  );
};

export default Navbar;
