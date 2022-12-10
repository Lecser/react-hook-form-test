import * as yup from "yup";

export const LoginSchema = yup.object({
  Email: yup
    .string()
    .email("Введите корректый Email адресс")
    .required("Поле обязательно к заполнению."),
  Password: yup
    .string()
    .min(8, "Минимум 8 символов.")
    .required("Поле обязательно к заполнению."),
});
