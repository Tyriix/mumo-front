import LoginForm from "./login-form/LoginForm";
import "./login-section.scss";

const LoginSection = () => {
  return (
    <>
      <div className="login">
        <div className='login__column-first'>
        <h2 className='login__header'>Zaloguj się</h2>
        <LoginForm />
        <span className='login__text'>Nie masz konta? <span className='login__text-accent'>Zarejestruj się</span></span>
        </div>
        <div className='login__column-second'>
          <div className='login__list'>
          <ul>
            <li>Szybkie zapisy na zajęcia</li>
            <li>Dostęp do kalendarza zajęć</li>
            <li>Zarządzanie cyklem szkoleniowym</li>
            <li>Przypomnienia o zajęciach</li>
            <li>Możliwość założenia profilu psa</li>
          </ul>
          </div> 
          <div className='login__image-container'>
            <div className='login__image-skeleton'>
            <img src='src/assets/images/login-dog.png' 
            alt='Picture of a boston terrier dog looking to the side.' 
            className='login__image'/>
            <div className='login__image-circle'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginSection;
