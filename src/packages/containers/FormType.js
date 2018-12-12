import React from 'react';
import { getFormType } from '../settings/schema';

export default (props) => {
  const { settings, defaultSchemaType } = props;
  const entry = 'https://tenor.com/search/kitten-gifs hello kitty';
  const FormType = getFormType(entry, settings);
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
