import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  enhancers.push(devToolsEnhancer());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
