import React from 'react';
import { getFormType } from '../settings/schema';

export default (props) => {
  const { schema, defaultSchemaType } = props;
  const entry = 'https://tenor.com/search/kitten-gifs hello kitty';
  const FormType = getFormType(entry, schema);
  return (
    <div>
      Form Type
      <div>
        {FormType
            && FormType
          }
        {!FormType && defaultSchemaType
            && <span>Default form type</span>
          }
      </div>
    </div>
  );
};
