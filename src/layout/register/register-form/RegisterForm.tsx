import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register-form.scss";
import MainButton from "../../../components/buttons/MainButton";

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  
};
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    return data;
  };

  return (
    <>
      <Form
        className="register__form"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
      >
        <div className="register__form-container">
          <div className="register__form-input-label__container">
            <label htmlFor="register__form-input-name">Imię i nazwisko</label>
            <input
              id="register__form-input-name"
              type="email"
              {...register("name")}
              className="register__form-input"
            />
            <div className="register__form-error-container">
              <span className="register__form-error">
                {errors.name?.message}
              </span>
            </div>
          </div>
          <div className="register__form-input-label__container">
            <label htmlFor="register__form-input-email">Adres email</label>
            <input
              id="register__form-input-email"
              type="email"
              {...register("email")}
              className="register__form-input"
            />
            <div className="register__form-error-container">
              <span className="register__form-error">
                {errors.email?.message}
              </span>
            </div>
          </div>
          <div className="register__form-input-label__container">
            <label htmlFor="register__form-input-phone">Numer telefonu</label>
            <input
              id="register__form-input-phone"
              type="email"
              {...register("phone")}
              className="register__form-input"
            />
            <div className="register__form-error-container">
              <span className="register__form-error">
                {errors.phone?.message}
              </span>
            </div>
          </div>
          <div className="register__form-input-label__container">
            <label htmlFor="register__form-input-password">Hasło</label>
            <input
              id="register__form-input-password"
              type="password"
              {...register("password")}
              className="register__form-input"
            />
            <div className="register__form-error-container">
              <span className="register__form-error">
                {errors.password?.message}
              </span>
            </div>
          </div>
          <div className="register__form-input-label__container">
            <label htmlFor="register__form-input-password-repeat">
              Powtórz hasło
            </label>
            <input
              id="register__form-input-password-repeat"
              type="password"
              {...register("repeatPassword")}
              className="register__form-input"
            />
            <div className="register__form-error-container">
              <span className="register__form-error">
                {errors.repeatPassword?.message}
              </span>
            </div>
          </div>

          <MainButton
            type="submit"
            className="login__form-submit-button"
            content={"Zaloguj się"}
          />
        </div>
      </Form>
    </>
  );
};
export default RegisterForm;
