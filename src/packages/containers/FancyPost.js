import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TypeHere, Preview, FormType } from '../index';
import { isPost, isImage, isUrl } from '../settings/isType';
import { Wrapper } from './styles/styled';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#666666'
    },
  },
});

const settings = typeHereValue => ({
  schema: [
    'weburl',
    'post',
    'image'
  ],
  types: {
    post: {
      fields: ['title', 'description', 'url', 'image']
    },
    image: {
      fields: ['title', 'description', 'url', 'image']
    },
    weburl: {
      fields: ['description', 'title', 'url']
    },
  },
  rules: {
    post: isPost,
    image: isImage,
    weburl: isUrl
  },
  templates: {
    title: <Input
      size="large"
      className="input-separator"
      key="title"
      placeholder="Title"
    />,
    description:
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
  </MuiThemeProvider>,
    url: <Input
      size="large"
      className="input-separator"
      key="weburl"
      placeholder="Web Url"
    />,
    image: <Input
      size="large"
      className="input-separator"
      key="imageurl"
      placeholder="Image Url"
    />,
  }
});

class FancyPost extends Component {
  render() {
    const { typeHereValue } = this.props;
    return (
      <Wrapper>
        <TypeHere
          preview={Preview}
        />
        <FormType
          settings={settings(typeHereValue)}
          defaultSchemaType="post"
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  typeHereValue: state.typeHereValue,
});

export default connect(mapStateToProps, undefined)(FancyPost);
