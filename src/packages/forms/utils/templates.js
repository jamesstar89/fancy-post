import React from 'react';
import { Input, Checkbox } from 'antd';
import { TextField, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FormContainer } from '../styles/styled';
import '../../containers/styles/styles.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#666666'
    },
  },
});

export const postTemplate = typeHereValue => (
  <FormContainer>
    <Typography variant="subheading" gutterBottom>
      Post
    </Typography>
    <Input
      size="large"
      className="input-separator"
      key="title"
      value=""
      onChange={() => {}}
      placeholder="Title"
    />
    <MuiThemeProvider
      key="description"
      theme={theme}
    >
      <TextField
        multiline
        rowsMax="12"
        fullWidth
        label="Description"
        className="text-field-description"
        value={typeHereValue}
        onChange={() => {}}
        margin="normal"
        variant="filled"
      />
    </MuiThemeProvider>
  </FormContainer>);

export const urlTempate = typeHereValue => (
  <FormContainer>
    <Typography variant="subheading" gutterBottom>
      Web url
    </Typography>
    <Input
      size="large"
      className="input-separator"
      key="weburl"
      value={typeHereValue}
      onChange={() => {}}
      placeholder="Web url"
    />
    <Typography variant="body2" gutterBottom>
      Meta data discovered
    </Typography>
    <Checkbox checked onChange={() => {}}>Title</Checkbox>
    {' '}
    <Checkbox checked onChange={() => {}}>Description</Checkbox>
    {' '}
    <Checkbox checked onChange={() => {}}>Image Url</Checkbox>
    {' '}
  </FormContainer>);

export const imageTemplate = typeHereValue => (
  <FormContainer>
    <Typography variant="subheading" gutterBottom>
      Image url
    </Typography>
    <Input
      size="large"
      className="input-separator"
      key="imageurl"
      value={typeHereValue}
      onChange={() => {}}
      placeholder="Image url"
    />
  </FormContainer>);

export const markdownTemplate = typeHereValue => (
  <FormContainer>
    <Typography variant="subheading" gutterBottom>
      Post with markdown
    </Typography>
    <MuiThemeProvider
      key="description"
      theme={theme}
    >
      <TextField
        multiline
        rowsMax="12"
        fullWidth
        label="Markdown"
        className="text-field-description"
        value={typeHereValue}
        onChange={() => {}}
        margin="normal"
        variant="filled"
      />
    </MuiThemeProvider>
  </FormContainer>);

export const sermonTemplate = typeHereValue => (<>
  <FormContainer>
    <Typography variant="subheading" gutterBottom>
      Sermon
    </Typography>
    <Input
      size="large"
      className="input-separator"
      key="character"
      onChange={() => {}}
      placeholder="Characters"
    />
    <Input
      size="large"
      className="input-separator"
      key="bibleverses"
      value={typeHereValue}
      onChange={() => {}}
      placeholder="Bible verses"
    />
  </FormContainer>
</>);

export default postTemplate;
