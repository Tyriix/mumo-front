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

const WRONG_EMAIL_OR_PASSWORD_ERROR_MESSAGE =
  'Błędny email lub hasło.';
export type LoginSchemaType = yup.InferType<typeof loginFormSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(loginFormSchema),
  });
  const [isUserExistError, setUserExistError] = useState(false);
  const [isLoginError, setLoginError] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
        const response = await loginUser(data);
        if ('error' in response) {
          const error = response.error as Error;
          console.log(error)
          if ('data' in error) {
            if (error.data === WRONG_EMAIL_OR_PASSWORD_ERROR_MESSAGE) {
              setUserExistError(true);
              setLoginError(false);
            } else {
              setUserExistError(false);
              setLoginError(true);
            }
          }
        } else {
          navigate('/');
        }
    } catch (error) {
      console.error('Error sending mail:', error);
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
              {errors.password?.message}
            </span>
            {isUserExistError && (
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
