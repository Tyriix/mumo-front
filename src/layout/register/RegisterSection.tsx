import RegisterForm from "./register-form/RegisterForm";
import "./register-section.scss";

const RegisterSection = () => {

  return (
    <>
      <div className="register">
        <div className="register__container">
        <div className="register__section-form">
         <h2 className="register__header">Stwórz konto</h2>
         <RegisterForm />
         </div>
        </div>
        <div className="register__section-image">
          <div className="register__section-image-circle">
            
          </div>
          {/* <img className='register__image' src="src\assets\images\register-dog.png" alt="Adult dog facing left and holding a toy." /> */}
        </div>
        </div>
    </>
  );
};
export default RegisterSection;
