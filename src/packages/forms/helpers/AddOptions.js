import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import * as utils from '../utils/utils';
import Tag from './Tags';
import { TagContainer } from '../styles/styled';

const TypographyStyled = styled(Typography)`
  color: white !important;
`;

class AddOptions extends Component {
  render() {
    const { typeHereValue, activeOption, onClick } = this.props;
    const defaultToRender = utils.formTemplate(typeHereValue, activeOption).type;

    return (
      <TagContainer>
        <TypographyStyled
          variant="body2"
          gutterBottom
        >
        Add more options
        </TypographyStyled>
        {Tag(defaultToRender, 'post', onClick)}
        {Tag(defaultToRender, 'markdown', onClick)}
        {Tag(defaultToRender, 'sermon', onClick)}
        {Tag(defaultToRender, 'image', onClick)}
        {Tag(defaultToRender, 'url', onClick)}
        {Tag(defaultToRender, 'video', onClick)}
        {Tag(defaultToRender, 'podcast', onClick)}
      </TagContainer>
    );
  }
}

export default AddOptions;
