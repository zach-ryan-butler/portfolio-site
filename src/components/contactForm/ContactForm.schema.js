import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Required value'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Required value'),
  message: yup
    .string()
    .max(255, 'Can not exceed 255 characters')
    .required('Required value'),
});
