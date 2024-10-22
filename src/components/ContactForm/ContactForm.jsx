import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addContact } from "../../redux/contacts/operations";
import { contactFormSchema } from "../../redux/schemas/contactFormSchema";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <div className={css.box}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
