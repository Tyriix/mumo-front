import LoginForm from "./login-form/LoginForm";
import "./login-section.scss";

const LoginSection = () => {
  return (
    <>
      <div className="login">
        <h2 className='login__header'>Zaloguj się</h2>
        <LoginForm />
        <span className='login__text'>Nie masz konta? <span className='login__text-accent'>Zarejestruj się</span></span>
      </div>
    </>
  );
};
export default LoginSection;
