import * as Yup from "yup";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().trim().required("Email is required").matches(emailRegex, {
    message: "Invalid email.",
  }),
  password: Yup.string().trim().min(6).required("Password is required"),
});
