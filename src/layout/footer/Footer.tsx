import { FC, useEffect } from 'react';
import './footer.scss';

interface Props {
  isLoginRegister: boolean;
}
const useLoginPageStyles = (isLoginRegister: boolean) => {
  useEffect(() => {
    if (isLoginRegister) {
      const footer = document.querySelector('.footer');
      footer?.classList.add('footer__login-register-page');
    }
  }, [isLoginRegister]);
};

const Footer: FC<Props> = (props: Props) => {
  const currentYear = new Date().getFullYear();

  useLoginPageStyles(props.isLoginRegister);

  return (
    <div className='footer' id='footer'>
      <p className='footer__text'>
        &copy; {currentYear} Mumo - Szkolenie Psów Aleksandra Linek
      </p>
    </div>
  );
};

export default Footer;
