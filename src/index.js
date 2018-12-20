import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './packages/redux/store';
import FancyPost from './packages/containers/FancyPost';
import { formTemplate } from './packages/templates/templates';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <FancyPost
      formTemplate={formTemplate}
    />
  </Provider>,
  target,
);

serviceWorker.unregister();
