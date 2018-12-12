import React from 'react';
import ReactDOM from 'react-dom';
import FancyPost from './packages/containers/FancyPost';
import { isPost, isImage, isUrl } from './packages/settings/isType';
import * as serviceWorker from './serviceWorker';

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
      fields: ['title', 'description', 'url', 'image']
    },
  },
  rules: {
    post: isPost,
    image: isImage,
    weburl: isUrl
  },
  templates: {
    title: <div key="title">Title field</div>,
    description: <div key="description">Description field</div>,
    url: <div key="url">Url field</div>,
    image: <div key="image">Image field</div>,
  }
};

const target = document.getElementById('root');
ReactDOM.render(
  <FancyPost settings={settings} />,
  target,
);

serviceWorker.unregister();
