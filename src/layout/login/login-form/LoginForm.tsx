import { Form, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './login-form.scss';
import * as yup from 'yup';
import MainButton from '../../../components/buttons/MainButton';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { loginFormSchema } from '../../../models/schemas.yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginUserMutation } from '../../../api/auth/authApi';
import { useState } from 'react';

const WRONG_EMAIL_OR_PASSWORD = 'Błędny email lub hasło. Spróbuj ponownie.';
export type LoginSchemaType = yup.InferType<typeof loginFormSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigate();
  const [isWrongEmailOrPassword, setIsWrongEmailOrPassword] = useState(false);
  const [setLoginError] = useLoginUserMutation();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const response = await setLoginError(data);

      if (
        'data' in response &&
        'message' in response.data &&
        response.data.message === 'Logowanie pomyślne.'
      ) {
        setIsWrongEmailOrPassword(false);
        navigate('/');
      } else if ('error' in response) {
        const error = response.error as Error;
        if ('data' in error && error.data === WRONG_EMAIL_OR_PASSWORD) {
          setIsWrongEmailOrPassword(true);
        } else {
          setIsWrongEmailOrPassword(false);

          setError('password', {
            type: 'manual',
            message: `${WRONG_EMAIL_OR_PASSWORD}`,
          });
        }
      }
    } catch (error) {
      console.error('Login error:', error);
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
              {errors.password?.message && !isWrongEmailOrPassword
                ? errors.password.message
                : ''}
            </span>
            {isWrongEmailOrPassword && (
              <span className='register-form__error'>
                Błędny email lub hasło.
              </span>
            )}
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
          </div>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
