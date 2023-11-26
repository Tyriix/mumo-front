import { Form, useNavigate } from 'react-router-dom';
import { FieldErrors, useForm } from 'react-hook-form';
import './login-form.scss';
import * as yup from 'yup';
import MainButton from '../../../components/buttons/MainButton';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { loginFormSchema } from '../../../models/schemas.yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginUserMutation } from '../../../api/auth/authApi';
import { useEffect, useState } from 'react';

const WRONG_EMAIL_OR_PASSWORD = 'Użytkownik o takim adresie email nie istnieje. Spróbuj ponownie';
export type LoginSchemaType = yup.InferType<typeof loginFormSchema>;
const useClearUserExistErrorEffect = (
  errors: FieldErrors<LoginSchemaType>,
  setWrongEmailOrPassword: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (errors.email?.message) {
      setWrongEmailOrPassword(false);
    }
  }, [errors.email?.message, setWrongEmailOrPassword]);
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginFormSchema),
  });
 
  const navigate = useNavigate();
  const [isEmailWrongOrPassword, setWrongEmailOrPassword] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [loginUser] = useLoginUserMutation();
  useClearUserExistErrorEffect(errors, setWrongEmailOrPassword);

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const response = await loginUser(data);
      if ('error' in response) {
        const error = response.error as Error;
        if ('data' in error) {
          if (error.data === WRONG_EMAIL_OR_PASSWORD) {
            setWrongEmailOrPassword(true);
            setIsLoginError(false);
          } else {
            setWrongEmailOrPassword(false);
            setIsLoginError(true);
          }
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
      <Form
        className='login__form'
        onSubmit={handleSubmit(onSubmit)}
        method='post'
      >
        <div className='login__form-container'>
          <input
            id='login__form-input-email'
            type='email'
            {...register('email')}
            className='login__form-input'
            placeholder='Adres email'
            autoComplete='on'
          />
          <div className='login__form-error-container'>
            <span className='login__form-error'>{errors.email?.message}</span>
          </div>
          {isEmailWrongOrPassword && (
                    <span className='register-form__error'>
                      Uzytkownik o tym mailu juz istnieje.
                    </span>
                  )}
          <input
            id='login__-form-input-password'
            type='password'
            {...register('password')}
            className='login__form-input'
            placeholder='Hasło'
            autoComplete='on'
          />
          <div className='login__form-error-container'>
            <span className='login__form-error'>
              {errors.password?.message}
            </span>
          </div>
          <div className='login__form-button-icon-row'>
            <MainButton
              type='submit'
              className='login__form-submit-button'
              content={'Zaloguj się'}
            />
            <span className='login__form-text'>Lub zaloguj się przez:</span>
            <div className='login__form-icons'>
              <FaFacebook
                aria-label='Facebook'
                className='login__form-icon login__form-icon-facebook'
              />
              <FcGoogle aria-label='Google' className='login__form-icon' />
            </div>
            {isLoginError && (
            <span className='register-form__error'>
              Wystąpił nieoczekiwany problem podczas procesu rejestracji.
            </span>
          )}
          </div>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
