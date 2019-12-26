import React from 'react';
import { Field } from 'react-final-form';
import { FileUpload } from '../../../components';

export const WorkspaceAvatarField: React.FC = () => {

    return (
      <Field name="avatar">
        {({input: {value, onChange}, meta: {error, touched}}) => (
          <FileUpload
            label="Avatar"
            value={value}
            error={error && touched ? error : ''}
            onChange={onChange}
          />
        )}
      </Field>
    );
};
