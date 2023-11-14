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
  name: yup
    .string()
    .required('Proszę podać swoje imię.')
    .matches(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i),
  email: yup
    .string()
    .email('Proszę podać poprawny adres email.')
    .required('Proszę podać swój adres email.'),
  phone: yup
    .string()
    .required('Proszę podać swój number telefonu.')
    .matches(/[+\- ()0-9]*/g),
  password: yup
    .string()
    .required('Proszę podać swoje hasło.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Hasło musi zawierać minimum: 8 znaków, jedną wielką literę, jedną małą literę, jedną cyfrę oraz jeden znak specjalny.'
    ),
  repeatPassword: yup
    .string()
    .required('Proszę potwierdzić swoje hasło.')
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać.'),
  agreeTerms: yup
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
    .email('Wpisz poprawny email')
    .required('Wpisz swój email'),
  password: yup.string().required('Proszę podać swoje imię.').length(6),
});
