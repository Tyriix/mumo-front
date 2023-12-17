import { FieldErrors, useForm } from 'react-hook-form';
import * as yup from 'yup';
import MainButton from '../../../components/buttons/MainButton';
import { registerFormSchema } from '../../../models/schemas.yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './register-form.scss';
import { useRegisterUserMutation } from '../../../api/auth/auth.api';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type RegisterSchemaType = yup.InferType<typeof registerFormSchema>;
const USER_EXIST_ERROR_MESSAGE = 'Użytkownik o podanej nazwie już istnieje.';

const useClearUserExistErrorEffect = (
  errors: FieldErrors<RegisterSchemaType>,
  setUserExistError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (errors.email?.message) {
      setUserExistError(false);
    }
  }, [errors.email?.message, setUserExistError]);
};

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(registerFormSchema),
  });

  const [isUserExistError, setUserExistError] = useState(false);
  const [isRegisterError, setRegisterError] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  useClearUserExistErrorEffect(errors, setUserExistError);

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      const response = await registerUser(data);
      if ('error' in response) {
        const error = response.error as FetchBaseQueryError;
        if ('data' in error && error.data === USER_EXIST_ERROR_MESSAGE) {
          setUserExistError(true);
          setRegisterError(false);
        } else {
          setUserExistError(false);
          setRegisterError(true);
        }
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <>
      <form
        className='register-form'
        onSubmit={handleSubmit(onSubmit)}
        method='post'
        role='form'
      >
        <div className='register-form__container'>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-name'
            >
              <span className='register-form__input-label-text'>Imię</span>

              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-first-name'
                  data-testid='register-form__input-first-name'
                  type='text'
                  {...register('first_name')}
                  autoComplete='first_name'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-first-name'
                  >
                    {errors.first_name?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.first_name?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-name'
            >
              <span className='register-form__input-label-text'>Nazwisko</span>

              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-last-name'
                  data-testid='register-form__input-last-name'
                  type='text'
                  {...register('last_name')}
                  autoComplete='name'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-last-name'
                  >
                    {errors.last_name?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.last_name?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-email'
            >
              <span className='register-form__input-label-text'>
                Adres email
              </span>
              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-email'
                  data-testid='register-form__input-email'
                  type='email'
                  {...register('email')}
                  autoComplete='email'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-email'
                  >
                    {errors.email?.message}
                  </span>
                  {isUserExistError && (
                    <span className='register-form__error'>
                      Użytkownik o tym mailu już istnieje.
                    </span>
                  )}
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.email?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-phone'
            >
              <span className='register-form__input-label-text'>
                Numer telefonu
              </span>
              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-phone'
                  data-testid='register-form__input-phone'
                  type='text'
                  {...register('phone_number')}
                  autoComplete='tel'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-phone'
                  >
                    {errors.phone_number?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.phone_number?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-password'
            >
              <span className='register-form__input-label-text'>Hasło</span>
              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-password'
                  data-testid='register-form__input-password'
                  type='password'
                  {...register('password')}
                  className='register-form__input'
                  autoComplete='off'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-password'
                  >
                    {errors.password?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.password?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__input-row'>
            <label
              className='register-form__label'
              htmlFor='register-form__input-password-repeat'
            >
              <span className='register-form__input-label-text'>
                Powtórz hasło
              </span>
              <div className='register-form__input-error-column'>
                <input
                  id='register-form__input-password-repeat'
                  data-testid='register-form__input-repeat-password'
                  type='password'
                  {...register('repeat_password')}
                  className='register-form__input'
                  autoComplete='off'
                />
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-repeat-password'
                  >
                    {errors.repeat_password?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.repeat_password?.message}
                </span>
              </div>
            </label>
          </div>
          <div className='register-form__checkbox-row'>
            <label className='register-form__checkbox-label'>
              <div className='register-form__checkbox-wrapper'>
                <div className='register-form__checkbox-input-text-row'>
                  <input
                    id='check'
                    type='checkbox'
                    className='register-form__input-checkbox'
                    data-testid='register-form__input-checkbox'
                    {...register('agree_terms')}
                  />
                  <span className='register-form__checkbox-label-text'>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                    udzielenia odpowiedzi na składaną wiadomość.
                  </span>
                </div>
                <div className='register-form__error-container'>
                  <span
                    className='register-form__error'
                    data-testid='register-form__error-agree-terms'
                  >
                    {errors.agree_terms?.message}
                  </span>
                </div>
              </div>
              <div className='register-form__error-container-mobile'>
                <span className='register-form__error'>
                  {errors.agree_terms?.message}
                </span>
              </div>
            </label>
          </div>
        </div>
        <MainButton
          type='submit'
          className='register-form__submit-button'
          content={'Zarejestruj się'}
        />
        <div className='register-form__error-container'>
          {isRegisterError && (
            <span className='register-form__error'>
              Wystąpił nieoczekiwany problem podczas procesu rejestracji.
            </span>
          )}
        </div>
      </form>
    </>
  );
};
export default RegisterForm;
