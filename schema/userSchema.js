import { object, string } from "yup";

export const contactSchema = object().shape({
  name: string().required("Please enter your Name."),
  email: string()
    .email("Please enter a valid email address.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email address is not valid."),
  message: string().required("Please enter a Message."),
});
