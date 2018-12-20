import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

const FormType = (props) => {
  const { formTemplate, typeHereValue, } = props;

  if (!typeHereValue) {
    return <div />;
  }

  return (
    <div>
      {formTemplate(typeHereValue)}
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
