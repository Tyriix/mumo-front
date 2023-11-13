import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './login-form.scss';
import * as yup from 'yup'
import MainButton from '../../../components/buttons/MainButton';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { loginFormSchema } from '../../../models/schemas.yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = yup.InferType<typeof loginFormSchema>

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginFormSchema)
  });

  const onSubmit = (data: FormData) => {
    return data;
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
          </div>
          <div className='login__form-button-icon-row'>
            <MainButton
              type='submit'
              className='login__form-submit-button'
              content={'Zaloguj się'}
            />
            <span className='login__form-text'>Lub zaloguj się przez:</span>
            <div className='login__form-icons'>
              <FaFacebook aria-label='Facebook' className='login__form-icon login__form-icon-facebook' />
              <FcGoogle aria-label='Google' className='login__form-icon' />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
