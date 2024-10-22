import * as Yup from 'yup';

const nameRegex = /^[a-zA-Za-яА-Я]+(([' -] [a-zA-Za-яА-Я])?[a-zA-Za-яА-Я])*$/;

const numberRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  
export const contactFormSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, 'To short!')
        .max(50, 'Too long!')
        .required('Name is required')
        .matches(nameRegex, {
            message: 'Invalid name. Name may contain only letters, apostrophe, dash and spaces.',
        }),
    
    number: Yup.string()
        .trim()
        .required('Number is required')
        .min(7)
        .matches(numberRegex, {
            message: 'Invaled number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
        }),
});