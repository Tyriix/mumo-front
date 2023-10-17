import { Form } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "./login-form.scss";
import MainButton from '../../../components/buttons/MainButton';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

type FormData = {
  email: string,
  password: string
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    return data
  }

    return (
      <>
      
      <Form className='login-form'
      onSubmit={handleSubmit(onSubmit)}
      method='post'>
        <div className='login-form__container'>
        <input id='login-form__input-email'
        type='email' 
        {...register('email')}
        className='login-form__input'
        placeholder='Adres email'/>
        <div className="login-form__error-container">
          <span className="login-form__error">{errors.email?.message}</span>
        </div>
        <input id='login-form__input-password'
        type='password' 
        {...register('password')}
        className='login-form__input'
        placeholder='Hasło'/>
        <div className="login-form__error-container">
          <span className="login-form__error">{errors.password?.message}</span>
        </div>
        <div className='login-form__button-icon-row'>
        <MainButton
        type="submit"
        className="login-form__submit-button"
        content={'Zaloguj się'}
      />
      <span className='login-form__text'>
        Lub zaloguj się przez:
      </span>
      <FaFacebook className='login-form__icon login-form__icon-facebook'/>
      <FcGoogle className='login-form__icon'/>
        </div>
        
        </div>
      </Form>
      </>
    );
  };
  export default LoginForm;