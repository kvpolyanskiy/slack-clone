import { Schema } from 'yup';
import { set, has, path as get, lensProp } from 'ramda';

export const createValidator = <T>(validator: Schema<T>) => {
  return async (values: T) => {
    try {
      await validator.validate(values, {abortEarly: false});
    } catch (err) {
      return err.inner.reduce((errors: any, {path, message}: any) => {
        if (has(path, errors)) {
          return set(lensProp(path), `${get([path], errors)} ${message}`, errors);
        }

        return set(lensProp(path), message, errors);
      }, {});
    }
  };
};
