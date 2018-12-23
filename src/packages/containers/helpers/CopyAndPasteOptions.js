import React, { Component } from 'react';
import styled from 'styled-components';
import { Drawer, Icon } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ButtonLink = styled.button`
  color: #1890ff;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: 4px;
`;

const IconStyled = styled(Icon)`
  position: absolute;
  background: white;
  font-size: 20px;
  color: #4984e3;
  top: 20px;
  right: 0;
  border: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 99;
`;

class CopyAndPasteOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  render() {
    return (
      <>
        <IconStyled
          onClick={this.onToggle}
          type="left"
        />
        <Drawer
          title="Copy and paste options"
          width={500}
          onClose={this.onToggle}
          visible={this.state.visible}
        >
          <p>
            http://www.google.com
            {' '}
            <CopyToClipboard text="http://www.google.com">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
          <p>
            John 3:16
            {' '}
            <CopyToClipboard text="John 3:16">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
          <p>
            image1.png
            {' '}
            <CopyToClipboard text="image1.png">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
          <p>
            image1.png image2.png
            {' '}
            <CopyToClipboard text="image1.png image2.png">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
          <p>
            # header
            {' '}
            <CopyToClipboard text="# header">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
          <p>
            Hello world
            {' '}
            <CopyToClipboard text="Hello world">
              <ButtonLink>Copy</ButtonLink>
            </CopyToClipboard>
          </p>
        </Drawer>
      </>
    );
  }
}

export default CopyAndPasteOptions;
