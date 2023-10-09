import { Form } from 'react-router-dom'
import './contact-form.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import * as classnames from 'classnames'

const schema = yup.object({
  name: yup
    .string()
    .required('Proszę podać swoje imię.')
    .matches(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i),
  email: yup
    .string()
    .email('Proszę podać poprawny adres email.')
    .required('Proszę podać swój adres email.'),
  message: yup.string().required('Proszę podać swoją wiadomość.'),
  agreeTerms: yup
    .boolean()
    .required('Proszę zaakceptować zgodę na przetwarzanie danych osobowych.')
    .oneOf(
      [true],
      'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.'
    ),
})

type FormData = yup.InferType<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
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
        </div>{' '}
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
        </div>{' '}
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
        </div>{' '}
      </div>
      <button type="submit" className="contact-form__submit-button">
        Wyślij
      </button>
    </Form>
  )
}

export default ContactForm
