import * as yup from 'yup';

export const homeContactSchema = yup.object({
  name: yup
    .string()
    .required('Proszę podać swoje imię.')
    .matches(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i, {
      message: 'Pole zawiera niedozwolone znaki.',
    }),

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
});

export const registerFormSchema = yup.object({
  email: yup
    .string()
    .email('Proszę podać poprawny adres email.')
    .required('Proszę podać swój adres email.'),
  first_name: yup
    .string()
    .required('Proszę podać swoje imię.')
    .matches(/^[a-z]+(?:['_.\s][a-z]+)*$/i, 'Niepoprawny format imienia.'),
  last_name: yup
    .string()
    .required('Proszę podać swoje nazwisko.')
    .matches(/^[a-z]+(?:['_.\s][a-z]+)*$/i, 'Niepoprawny format nazwiska.'),
  phone_number: yup
    .string()
    .required('Proszę podać swój numer telefonu.')
    .matches(/^\d{9}$/, 'Numer telefonu musi składać się z 9 cyfr.'),
  password: yup
    .string()
    .required('Proszę podać swoje hasło.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Wymagane: 8 znaków, duża i mała litera, cyfra, znak specjalny.'
    ),
  repeat_password: yup
    .string()
    .required('Proszę potwierdzić swoje hasło.')
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać.'),
  agree_terms: yup
    .boolean()
    .required('Proszę zaakceptować zgodę na przetwarzanie danych osobowych.')
    .oneOf(
      [true],
      'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.'
    ),
});

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Proszę wpisać poprawny email.')
    .required('Proszę wpisać swój email.'),
  password: yup.string().required('Proszę podać swoje hasło.'),
});
