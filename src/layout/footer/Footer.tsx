import { FC } from 'react';
import './footer.scss';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <p className='footer__text'>
        &copy; {currentYear} Mumo - Szkolenie Psów Aleksandra Linek
      </p>
    </div>
  );
};

export default Footer;
