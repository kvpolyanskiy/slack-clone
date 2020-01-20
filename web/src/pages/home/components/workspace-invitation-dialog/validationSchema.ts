import { string, object } from 'yup';

export const validationSchema = object().shape({
  email: string()
    .email()
    .required(),
});
