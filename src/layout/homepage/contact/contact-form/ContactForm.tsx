import { Form } from 'react-router-dom';
import './contact-form.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MainButton from '../../../../components/buttons/MainButton';
import { homeContactSchema } from '../../../../models/schemas.yup';
import Axios from 'axios';
import { BASE_URL_API } from '../../../../models/constants.app';
import { useState } from 'react';
import classnames from 'classnames';

type FormDataYup = yup.InferType<typeof homeContactSchema>;

const ContactFormFields = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataYup>({
    resolver: yupResolver(homeContactSchema),
  });

  const onSubmit = async (data: FormDataYup) => {
    try {
      await Axios.post(`${BASE_URL_API}/form-email`, data);
      setMessageSent(true);
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  const onNewMessage = () => setMessageSent(false);

  return (
    <>
      {isMessageSent ? (
        <div className='contact-form__message-sent'>
          <img
            className='contact-form__message-sent-image'
            src='../src/assets/images/mail.png'
            alt='Message sent'
            draggable='false'
          />
          <p className='contact-form__message-sent-info'>Wiadomość wysłana</p>
          <a className='contact-form__message-sent-back' onClick={onNewMessage}>
            Wyślij nową wiadomość
          </a>
        </div>
      ) : (
        <Form
          className='contact-form'
          onSubmit={handleSubmit(onSubmit)}
          method='post'
        >
          <div className='contact-form__container'>
            <label className='contact-form_label' htmlFor='contact-form_email'>
              Email
            </label>
            <input
              id='contact-form_email'
              type='email'
              {...register('email')}
              className={classnames(
                'contact-form__input',
                errors.email && 'contact-form__input-alert-active'
              )}
            />
            <div className='contact-form__error-container'>
              <span className='contact-form__error'>
                {errors.email?.message}
              </span>
            </div>
            <label className='contact-form_label' htmlFor='contact-form_name'>
              Imię
            </label>
            <input
              id='contact-form_name'
              type='text'
              {...register('name')}
              className={classnames(
                'contact-form__input',
                errors.name && 'contact-form__input-alert-active'
              )}
            />
            <div className='contact-form__error-container'>
              <span className='contact-form__error'>
                {errors.name?.message}
              </span>
            </div>
            <label
              className='contact-form_label'
              htmlFor='contact-form_message'
            >
              Wiadomość
            </label>
            <textarea
              id='contact-form_message'
              className={classnames(
                'contact-form__textarea-message',
                errors.message && 'contact-form__textarea-alert-active'
              )}
              {...register('message')}
            />
            <div className='contact-form__error-container'>
              <span className='contact-form__error'>
                {errors.message?.message}
              </span>
            </div>
            <div className='contact-form__checkbox-row'>
              <label className='contact-form__checkbox-label'>
                <input
                  type='checkbox'
                  className='contact-form__input-checkbox'
                  {...register('agreeTerms')}
                />
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                udzielenia odpowiedzi na składaną wiadomość.
              </label>
            </div>
            <div className='contact-form__error-container'>
              <span className='contact-form__error'>
                {errors.agreeTerms?.message}
              </span>
            </div>
          </div>
          <MainButton
            type='submit'
            className='contact-form__submit-button'
            content={'Wyślij'}
          />
        </Form>
      )}
    </>
  );
};

export default ContactFormFields;
