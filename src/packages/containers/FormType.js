import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { activeOptionAction } from '../redux/actions';
import { ButtonContainer } from './styles/styled';

class FormType extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const activeOption = e.target.getAttribute('data-tag-name');
    if (activeOption !== 'video' && activeOption !== 'podcast') {
      this.props.activeOptionAction(activeOption);
    }
  }

  render() {
    const {
      formTemplate, typeHereValue, activeOption, addOptions
    } = this.props;
    const AddOptionsElement = addOptions;

    if (!typeHereValue) {
      return <div />;
    }

    return (
      <>
        <AddOptionsElement
          onClick={this.onClick}
          typeHereValue={typeHereValue}
          activeOption={activeOption}
        />
        {formTemplate(typeHereValue, activeOption).template}
        <ButtonContainer>
          <Button
            type="primary"
            size="large"
            className="save-button"
          >
            Save
          </Button>
        </ButtonContainer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  typeHereValue: state.typeHereReducer.typeHereValue,
  activeOption: state.activeOptionReducer.activeOption
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    activeOptionAction,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(FormType);
