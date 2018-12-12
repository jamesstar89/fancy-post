import React from 'react';
import { Button } from 'antd';
import { getFormType } from '../settings/schema';
import { SwitchGroup, SwitchStyled } from './styles/styled';
import './styles/styles.scss';

export default (props) => {
  const { settings, defaultSchemaType } = props;
  const entry = 'https://tenor.com/search/kitten-gifs hello kitty';
  const FormType = getFormType(entry, settings);
  return (
    <div>
      <SwitchGroup>
        Title
        {' '}
        <SwitchStyled
          size="small"
          defaultChecked
        />
        {' '}
        Description
        {' '}
        <SwitchStyled
          size="small"
          defaultChecked
        />
      </SwitchGroup>
      {FormType
          && FormType
        }
      {!FormType && defaultSchemaType
          && <span>Default form type</span>
        }
      <Button
        type="primary"
        size="large"
        className="save-button"
      >
        Save
      </Button>
    </div>
  );
};
