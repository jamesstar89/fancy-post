import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './packages/redux/store';
import FancyPost from './packages/containers/FancyPost';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <FancyPost />
  </Provider>,
  target,
);

serviceWorker.unregister();
