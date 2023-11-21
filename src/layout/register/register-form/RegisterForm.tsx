import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import MainButton from '../../../components/buttons/MainButton';
import { registerFormSchema } from '../../../models/schemas.yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './register-form.scss';

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
      <form
        className='register-form'
        onSubmit={handleSubmit(onSubmit)}
        method='post'
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
                  id='register-form__input-name'
                  type='text'
                  {...register('first_name')}
                  autoComplete='first_name'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
                  id='register-form__input-name'
                  type='text'
                  {...register('last_name')}
                  autoComplete='name'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
                  type='email'
                  {...register('email')}
                  autoComplete='email'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
                    {errors.email?.message}
                  </span>
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
                  type='text'
                  {...register('phone_number')}
                  autoComplete='tel'
                  className='register-form__input'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
                  type='password'
                  {...register('password')}
                  className='register-form__input'
                  autoComplete='off'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
                  type='password'
                  {...register('repeat_password')}
                  className='register-form__input'
                  autoComplete='off'
                />
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
                    {...register('agree_terms')}
                  />
                  <span className='register-form__checkbox-label-text'>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                    udzielenia odpowiedzi na składaną wiadomość.
                  </span>
                </div>
                <div className='register-form__error-container'>
                  <span className='register-form__error'>
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
      </form>
    </>
  );
};
export default RegisterForm;
