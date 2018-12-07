import React, { Component } from 'react';
import { TypeHere, Preview, FormType } from '../index';

class FancyPost extends Component {
  render() {
    const { settings } = this.props;
    const { schema } = settings;
    return (
      <div>
        <TypeHere
          preview={Preview}
        />
        <FormType
          schema={schema}
          defaultSchemaType="post"
        />
      </div>
    );
  }
}

export default FancyPost;
