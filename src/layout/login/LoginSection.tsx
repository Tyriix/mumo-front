import { useNavigate } from 'react-router-dom';
import WaveShape from '../../components/shapes/Wave';
import LoginForm from './login-form/LoginForm';
import './login-section.scss';

const LoginSection = () => {
  const navigate = useNavigate();
  const WAVE_COLORS = ['#7be5d5', '#21aa96']

  return (
    <>
      <div className='login'>
      <WaveShape
            className='login__form-wave-shape'
            colorTop={WAVE_COLORS[0]}
            colorBottom={WAVE_COLORS[1]}
          />
        <div className='login__container'>
        <div className='login__section-form'>
         <div className='login__section-border'>
         <span className='login__text'>
            Nie masz konta?{' '}
            <a onClick={() => navigate('/register')}>
            <span className='login__text-accent'>Zarejestruj się</span>
              </a>
          </span>
         <h2 className='login__header'>Zaloguj się</h2>
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
          <div className='login__section-image-circle'>
            
          </div>
          <img className='login__image' src='src\assets\images\login-dog.png' alt='Boston Terrier dog facing left.' />
        </div>
      </div>
    </>
  );
};
export default LoginSection;
