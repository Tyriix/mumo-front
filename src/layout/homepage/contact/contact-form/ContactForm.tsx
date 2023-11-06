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
import ContactFormField from './contact-form-field/ContactFormField';

type FormDataYup = yup.InferType<typeof homeContactSchema>;

export interface EmailDataForm {
  email: string;
  message: string;
  name: string;
  agreeTerms: NonNullable<boolean | undefined>;
}

const ContactForm = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataYup>({
    resolver: yupResolver(homeContactSchema),
  });

  const onSubmit = async (data: EmailDataForm) => {
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
          <a className='contact-form__message-sent-back' onClick={onNewMessage}>Wyślij nową wiadomość</a>
        </div>
      ) : (
        <Form
          className='contact-form'
          onSubmit={handleSubmit(onSubmit)}
          method='post'
        >
          <div className='contact-form__container'>
            <ContactFormField
              register={register('email')}
              errors={errors}
              fieldType={'email'}
              label={'Email'}
              elementHTML={'input'}
            />
            <ContactFormField
              register={register('name')}
              errors={errors}
              fieldType={'name'}
              label={'Imię'}
              elementHTML={'input'}
            />
            <ContactFormField
              register={register('message')}
              errors={errors}
              fieldType={'message'}
              label={'Wiadomość'}
              elementHTML={'textarea'}
            />
            <div className='contact-form__checkbox'>
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

export default ContactForm;
