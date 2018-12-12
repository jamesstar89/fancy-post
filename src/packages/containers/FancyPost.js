import React, { Component } from 'react';
import { TypeHere, Preview, FormType } from '../index';
import { Wrapper } from './styles/styled';

class FancyPost extends Component {
  render() {
    const { settings } = this.props;
    return (
      <Wrapper>
        <TypeHere
          preview={Preview}
        />
        <FormType
          settings={settings}
          defaultSchemaType="post"
        />
      </Wrapper>
    );
  }
}

export default FancyPost;
