import React, { Component } from 'react';
import { TextFieldEntry } from './styles/styled';

class TypeHere extends Component {
  render() {
    const Preview = this.props.preview;
    return (
      <div>
        <TextFieldEntry
          onChange={() => {}}
          placeholder="Type something"
        />
        <Preview />
      </div>
    );
  }
}

export default TypeHere;
