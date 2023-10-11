import { Form } from 'react-router-dom'
import './contact-form.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import classnames from 'classnames'
import MainButton from '../../../../components/buttons/MainButton'
import { homeContactSchema } from '../../../../models/schemas.yup'

type FormData = yup.InferType<typeof homeContactSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(homeContactSchema),
  })
  const onSubmit = (data: FormData) => {
    return data
  }

  return (
    <Form
      className="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <div className="contact-form__container">
        <input
          type="text"
          placeholder="Imię"
          {...register('name')}
          className={classnames(
            'contact-form__input',
            errors.name && 'contact-form__input-alert-active'
          )}
        />
        <div className="contact-form__error-container">
          <span className="contact-form__error">{errors.name?.message}</span>
        </div>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={classnames(
            'contact-form__input',
            errors.email && 'contact-form__input-alert-active'
          )}
        />
        <div className="contact-form__error-container">
          <span className="contact-form__error">{errors.email?.message}</span>
        </div>
        <textarea
          placeholder="Wiadomość"
          className={classnames(
            'contact-form__textarea-message',
            errors.name && 'contact-form__textarea-alert-active'
          )}
          {...register('message')}
        />
        <div className="contact-form__error-container">
          <span className="contact-form__error">{errors.message?.message}</span>
        </div>
        <div className="contact-form__checkbox-row">
          <input
            type="checkbox"
            className="contact-form__input-checkbox"
            {...register('agreeTerms')}
          />
          <label className="contact-form__checkbox-label">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            udzielenia odpowiedzi na składaną wiadomość.
          </label>
        </div>
        <div className="contact-form__error-container">
          <span className="contact-form__error">
            {errors.agreeTerms?.message}
          </span>
        </div>
      </div>
      <MainButton
        type="submit"
        className="contact-form__submit-button"
        content={'Wyślij'}
      />
    </Form>
  )
}

export default ContactForm
