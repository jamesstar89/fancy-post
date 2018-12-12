import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
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
    return (
      <PreviewWrapper>
        <Image />
        <DropdownStyled trigger={['click']} overlay={menu}>
          <ButtonStyled>
              Type as: Post
            {' '}
            <Icon type="down" />
          </ButtonStyled>
        </DropdownStyled>
      </PreviewWrapper>
    );
  }
}

export default Preview;
