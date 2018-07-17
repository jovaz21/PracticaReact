import { createStore } from 'redux';
import rootReducer from './reducer';

export { StatusSetAction, StatusResetAction } from './actions';
export { GameSetAction, GameResetAction } from './actions';

/* eslint-disable no-undef, no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
