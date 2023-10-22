import * as yup from "yup";

export const homeContactSchema = yup.object({
  name: yup
    .string()
    .required("Proszę podać swoje imię.")
    .matches(/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i),
  email: yup
    .string()
    .email("Proszę podać poprawny adres email.")
    .required("Proszę podać swój adres email."),
  message: yup.string().required("Proszę podać swoją wiadomość."),
  agreeTerms: yup
    .boolean()
    .required("Proszę zaakceptować zgodę na przetwarzanie danych osobowych.")
    .oneOf(
      [true],
      "Proszę zaakceptować zgodę na przetwarzanie danych osobowych."
    ),
});

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Wpisz poprawny email")
    .required("Wpisz swój email"),
  password: yup.string().required("Proszę podać swoje imię.").length(6),
});
