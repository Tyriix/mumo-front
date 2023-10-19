import { FC } from 'react';
import Navbar from '../Navbar';
import './navbar-desktop.scss';

const NavbarDesktop: FC = () => {
  return (
    <div className='navbar-desktop'>
      <Navbar />
    </div>
  );
};

export default NavbarDesktop;
