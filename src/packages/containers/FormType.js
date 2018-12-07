import React from 'react';
import getFormType from '../common/rules';

export default (props) => {
  const { schema, defaultSchemaType } = props;
  const userEntry = 'https://tenor.com/search/kitten-gifs hello kitty';
  const FormType = getFormType(userEntry, schema);
  return (
    <div>
      Form Type
      <div>
        {FormType
            && <FormType />
          }
        {!FormType && defaultSchemaType
            && <span>Default form type</span>
          }
      </div>
    </div>
  );
};
