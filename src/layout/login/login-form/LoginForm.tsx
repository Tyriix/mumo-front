import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login-form.scss";
import MainButton from "../../../components/buttons/MainButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type FormData = {
  email: string;
  password: string;
};
const LoginForm = () => {
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
        className="login__form"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
      >
        <div className="login__form-container">
          <input
            id="login__form-input-email"
            type="email"
            {...register("email")}
            className="login__form-input"
            placeholder="Adres email"
          />
          <div className="login__form-error-container">
            <span className="login__form-error">{errors.email?.message}</span>
          </div>    
          <input
            id="login__-form-input-password"
            type="password"
            {...register("password")}
            className="login__form-input"
            placeholder="Hasło"
          />
          <div className="login__form-error-container">
            <span className="login__form-error">
              {errors.password?.message}
            </span>
          </div>
          <div className="login__form-button-icon-row">
            <MainButton
              type="submit"
              className="login__form-submit-button"
              content={"Zaloguj się"}
            />
            <span className="login__form-text">Lub zaloguj się przez:</span>
            <div className="login__form-icons">
              <FaFacebook className="login__form-icon login__form-icon-facebook" />
              <FcGoogle className="login__form-icon" />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;