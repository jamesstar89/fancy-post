import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Icon } from 'antd';
import { typeHereAction } from '../redux/actions';
import {
  PreviewWrapper,
  Image,
  DropdownStyled,
  ButtonStyled
} from './styles/styled';

const menu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">Post</Menu.Item>
    <Menu.Item key="2">Web url</Menu.Item>
    <Menu.Item key="3">Image</Menu.Item>
  </Menu>
);

class Preview extends Component {
  render() {
    const { typeHereValue } = this.props;
    const className = typeHereValue
      ? 'preview-image-animation' : '';
    return (
      <PreviewWrapper>
        <Image className={className} />
        {typeHereValue
          && (
          <DropdownStyled trigger={['click']} overlay={menu}>
            <ButtonStyled>
                Type as: Post
              {' '}
              <Icon type="down" />
            </ButtonStyled>
          </DropdownStyled>
          )
        }
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
