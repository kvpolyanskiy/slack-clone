import { string, object } from 'yup';

export const validationSchema = object().shape({
  email: string()
    .email()
    .required(),
  password: string()
    .min(1)
    .max(256)
    .required(),
});
