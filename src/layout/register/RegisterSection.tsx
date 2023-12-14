import WaveShape from '../../components/shapes/Wave';
import RegisterForm from './register-form/RegisterForm';
import './register-section.scss';
import { colorsConstants } from '../../models/constants/style.constant';
const RegisterSection = () => {
  return (
    <>
      <div className='register'>
        <div className='register__container'>
          <div className='register__section-form'>
            <h2 className='register__header'>Stwórz konto</h2>
            <RegisterForm />
          </div>
        </div>
        <div className='register__section-image'>
          <div className='register__section-image-circle'></div>
          <img
            className='register__image'
            src='src\assets\images\register-dog.png'
            alt='Adult dog facing left and holding a toy.'
            draggable={false}
          />
        </div>
        <WaveShape
          className='register__form-wave-shape'
          colorTop={colorsConstants.WAVE_COLORS[0]}
          colorBottom={colorsConstants.WAVE_COLORS[1]}
        />
      </div>
    </>
  );
};
export default RegisterSection;
