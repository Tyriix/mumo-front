import { Form } from 'react-router-dom'
import './contact-form.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="form__container">
        <input type="text" placeholder="Imię" {...register('name')} className={errors.name ? 'input__alert-active': ''} />
        <div className='error__container'>
        <span className="form__error">{errors.name?.message}</span>
        </div>        <input type="email" placeholder="Email" {...register('email')} className={errors.email ? 'input__alert-active': ''}/>
        <div className='error__container'>
        <span className="form__error">{errors.email?.message}</span>
        </div>
        <textarea
          placeholder="Wiadomość"
          className={`input__message ${
            errors.message ? 'textarea__alert-active' : ''
          }`}
          {...register('message')}
          
        />
<div className='error__container'>
        <span className="form__error">{errors.message?.message}</span>
        </div>        <div className="checkbox__row">
          <input
            type="checkbox"
            className="input__checkbox"
            {...register('agreeTerms')}
          />
          <label className="checkbox__label">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            udzielenia odpowiedzi na składaną wiadomość.
          </label>
        </div>
        <div className='error__container'>
        <span className="form__error">{errors.agreeTerms?.message}</span>
        </div>      </div>
      <button type="submit" className="form__button">
        Wyślij
      </button>
    </Form>
  )
}

export default ContactForm
