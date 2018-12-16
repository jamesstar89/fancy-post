import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FancyPost from './packages/containers/FancyPost';
import { isPost, isImage, isUrl } from './packages/settings/isType';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#666666'
    },
  },
});

const settings = {
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
};

const target = document.getElementById('root');
ReactDOM.render(
  <FancyPost settings={settings} />,
  target,
);

serviceWorker.unregister();
