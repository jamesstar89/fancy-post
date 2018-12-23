import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TypeHere, Preview, FormType } from './index';
import { Wrapper } from './styles/styled';

class FancyPost extends Component {
  render() {
    return (
      <Wrapper>
        <TypeHere
          preview={Preview}
        />
        <FormType
          {...this.props}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  typeHereValue: state.typeHereValue,
});

export default connect(mapStateToProps, undefined)(FancyPost);
