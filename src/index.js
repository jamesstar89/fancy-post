import React from 'react';
import ReactDOM from 'react-dom';
import FancyPost from './packages/containers/FancyPost';
import * as serviceWorker from './serviceWorker';

const settings = {
  schema: 'weburl,post,image',
};

const target = document.getElementById('root');
ReactDOM.render(
  <FancyPost settings={settings} />,
  target,
);

serviceWorker.unregister();
