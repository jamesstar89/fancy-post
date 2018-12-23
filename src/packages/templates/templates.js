import React from 'react';
import { Input } from 'antd';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as isValueType from 'is-value-type';
import '../containers/styles/styles.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#666666'
    },
  },
});

const postTemplate = typeHereValue => (<>
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
  <Input
    size="large"
    className="input-separator"
    value=""
    onChange={() => {}}
    key="imageurl"
    placeholder="Image url"
  />
  </>);

const urlTempate = typeHereValue => (<>
  <Input
    size="large"
    className="input-separator"
    key="weburl"
    value={typeHereValue}
    onChange={() => {}}
    placeholder="Web url"
  />
  </>);

const imageTemplate = typeHereValue => (<>
  <Input
    size="large"
    className="input-separator"
    key="imageurl"
    value={typeHereValue}
    onChange={() => {}}
    placeholder="Image url"
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
      value=""
      onChange={() => {}}
      margin="normal"
      variant="filled"
    />
  </MuiThemeProvider>
  </>);

export const formTemplate = (typeHereValue) => {
  if (isValueType.isPost(typeHereValue)) {
    return postTemplate(typeHereValue);
  }
  if (isValueType.isUrl(typeHereValue)) {
    return urlTempate(typeHereValue);
  }
  if (isValueType.isImage(typeHereValue)) {
    return imageTemplate(typeHereValue);
  }
};

export default formTemplate;
