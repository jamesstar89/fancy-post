import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { getFormType } from '../settings/schema';
import { SwitchGroup, SwitchStyled } from './styles/styled';
import './styles/styles.scss';

const Spacer = styled.span`
  width: 7px;
  display: inline-block;
`;

const FormType = (props) => {
  const { settings, typeHereValue, defaultSchemaType } = props;
  const entry = 'https://tenor.com/search/kitten-gifs hello kitty';
  const renderFormType = getFormType(entry, settings);

  if (!typeHereValue) {
    return <div />;
  }

  return (
    <div>
      <SwitchGroup>
        Show Title
        <Spacer />
        <SwitchStyled
          size="small"
          defaultChecked
        />
      </SwitchGroup>
      {renderFormType
          && renderFormType
        }
      {!renderFormType && defaultSchemaType
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

const mapStateToProps = state => ({
  typeHereValue: state.typeHereValue,
});

export default connect(mapStateToProps, undefined)(FormType);
