import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { typeHereAction } from '../redux/actions';
import { TextFieldEntry } from './styles/styled';

export class TypeHere extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    if (value.length > 3) {
      this.props.typeHereAction(value);
    }
  }

  render() {
    const { preview } = this.props;
    const Preview = preview;
    return (
      <div>
        <TextFieldEntry
          onChange={this.onChange}
          placeholder="Type something"
        />
        <Preview />
      </div>
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
