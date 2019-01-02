import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './packages/redux/store';
import FancyPost from './packages/containers/FancyPost';
import * as formProps from './packages/forms/formTemplate';
import AddOptions from './packages/forms/helpers/AddOptions';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <FancyPost
      previewAddons={formProps.previewAddons}
      formTemplate={formProps.formTemplate}
      addOptions={AddOptions}
    />
  </Provider>,
  target,
);

serviceWorker.unregister();
