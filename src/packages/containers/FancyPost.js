import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TypeHere, Preview, FormType } from './index';
import CopyAndPasteOptions from './helpers/CopyAndPasteOptions';
import { FancyPostContainer } from './styles/styled';

class FancyPost extends Component {
  render() {
    const { previewAddons } = this.props;
    return (
      <FancyPostContainer>
        <TypeHere
          previewAddons={previewAddons}
          preview={Preview}
        />
        <FormType
          {...this.props}
        />
        <CopyAndPasteOptions />
      </FancyPostContainer>
    );
  }
}

const mapStateToProps = state => ({
  typeHereValue: state.typeHereReducer.typeHereValue,
});

export default connect(mapStateToProps, undefined)(FancyPost);
