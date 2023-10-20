import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register-form.scss";
import * as yup from "yup";
import MainButton from "../../../components/buttons/MainButton";
import { registerFormSchema } from "../../../models/schemas.yup";
import { yupResolver } from "@hookform/resolvers/yup";
import classnames from "classnames";

type FormData = yup.InferType<typeof registerFormSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (data: FormData) => {
    return data;
  };

  return (
    <>
      <Form
        className="register-form"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
      >
        <div className="register-form__container">
          <div className="register-form__input-row">
            <div className="register-form__input-label__container">
              <label
                className="register-form__label"
                htmlFor="register-form__input-name"
              >
                Imię i nazwisko
              </label>
              <input
                id="register-form__input-name"
                type="text"
                {...register("name")}
                className={classnames(
                  "register-form__input",
                  errors.name && "register-form__input-alert-active"
                )}
              />
            </div>
            <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.name?.message}
              </span>
            </div>
          </div>
          <div className="register-form__input-row">
            <div className="register-form__input-label__container">
              <label
                className="register-form__label"
                htmlFor="register-form__input-email"
              >
                Adres email
              </label>
              <input
                id="register-form__input-email"
                type="email"
                {...register("email")}
                className="register-form__input"
              />
            </div>
            <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.email?.message}
              </span>
            </div>
          </div>
          <div className="register-form__input-row">
            <div className="register-form__input-label__container">
              <label
                className="register-form__label"
                htmlFor="register-form__input-phone"
              >
                Numer telefonu
              </label>
              <input
                id="register-form__input-phone"
                type="text"
                {...register("phone")}
                className="register-form__input"
              />
            </div>
            <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.phone?.message}
              </span>
            </div>
          </div>
          <div className="register-form__input-row">
            <div className="register-form__input-label__container">
              <label
                className="register-form__label"
                htmlFor="register-form__input-password"
              >
                Hasło
              </label>
              <input
                id="register-form__input-password"
                type="password"
                {...register("password")}
                className="register-form__input"
              />
            </div>
            <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.password?.message}
              </span>
            </div>
          </div>
          <div className="register-form__input-row">
            <div className="register-form__input-label__container">
              <label
                className="register-form__label"
                htmlFor="register-form__input-password-repeat"
              >
                Powtórz hasło
              </label>
              <input
                id="register-form__input-password-repeat"
                type="password"
                {...register("repeatPassword")}
                className="register-form__input"
              />
            </div>
            <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.repeatPassword?.message}
              </span>
            </div>
          </div>
          <div className="register-form__input-row">
          <div className="register-form__checkbox-row">
          <input
              type="checkbox"
              className="contact__form-input-checkbox"
              {...register('agreeTerms')}
            />
          <label className="register-form__checkbox-label">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            udzielenia odpowiedzi na składaną wiadomość.
          </label>
          
        </div>
        <div className="register-form__error-container">
              <span className="register-form__error">
                {errors.agreeTerms?.message}
              </span>
            </div>
          </div>
          
          
        </div>
        <MainButton
            type="submit"
            className="register-form__submit-button"
            content={"Zarejestruj się"}
          />
      </Form>
    </>
  );
};
export default RegisterForm;
