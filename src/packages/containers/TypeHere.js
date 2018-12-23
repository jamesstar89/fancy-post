import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { typeHereAction } from '../redux/actions';
import { TypeHereContainer, TextFieldEntry } from './styles/styled';

export class TypeHere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: '40px',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    if (value.length > 3) {
      this.props.typeHereAction(value);
    }
    if (value.length > 7) {
      this.setState({
        fontSize: '35px'
      });
    }
  }

  render() {
    const { preview, previewAddons } = this.props;
    const Preview = preview;

    return (
      <TypeHereContainer>
        <TextFieldEntry
          type="text"
          element="textarea"
          placeholder="Type something"
          minLength={2}
          debounceTimeout={300}
          style={{
            fontSize: this.state.fontSize,
            lineHeight: this.state.fontSize,
          }}
          onChange={this.onChange}
        />
        <Preview previewAddons={previewAddons} />
      </TypeHereContainer>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    typeHereAction,
  },
  dispatch
);

export default connect(undefined, mapDispatchToProps)(TypeHere);
