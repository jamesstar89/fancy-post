import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { typeHereAction } from '../redux/actions';
import {
  PreviewWrapper,
  Image,
} from './styles/styled';

class Preview extends Component {
  render() {
    const { typeHereValue } = this.props;
    const className = typeHereValue
      ? 'preview-image-animation' : '';
    return (
      <PreviewWrapper>
        <Image className={className} />
      </PreviewWrapper>
    );
  }
}

const mapStateToProps = state => ({
  typeHereValue: state.typeHereValue,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    typeHereAction,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
