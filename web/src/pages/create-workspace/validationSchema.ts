import { string, object } from 'yup';

export const validationSchema = object().shape({
  name: string()
    .min(1)
    .max(256)
    .required(),
  avatar: string()
    .required(),
});
