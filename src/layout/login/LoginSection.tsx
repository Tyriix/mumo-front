import { useNavigate } from 'react-router-dom';
import WaveShape from '../../components/shapes/Wave';
import LoginForm from './login-form/LoginForm';
import './login-section.scss';
import { colorsConstants } from '../../models/constants/style.constant';

const LoginSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='login'>
        <WaveShape
          className='login__form-wave-shape'
          colorTop={colorsConstants.WAVE_COLORS[0]}
          colorBottom={colorsConstants.WAVE_COLORS[1]}
        />
        <div className='login__container'>
          <div className='login__section-form'>
            <div className='login__section-border'>
              <h2 className='login__header'>Zaloguj się</h2>
              <span className='login__text'>
                Nie masz konta?{' '}
                <a onClick={() => navigate('/register')} tabIndex={0}>
                  <span className='login__text-accent'>Zarejestruj się</span>
                </a>
              </span>
              <LoginForm />
            </div>
          </div>
          <div className='login__section-text'>
            <div className='login__list'>
              <ul>
                <li>Szybkie zapisy na zajęcia</li>
                <li>Dostęp do kalendarza zajęć</li>
                <li>Zarządzanie cyklem szkoleniowym</li>
                <li>Przypomnienia o zajęciach</li>
                <li>Możliwość założenia profilu psa</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='login__section-image'>
          <div className='login__section-image-circle'></div>
          <img
            className='login__image'
            src='src\assets\images\login-dog.png'
            alt='Boston Terrier dog facing left.'
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};
export default LoginSection;
