import { combineReducers } from 'redux';

import { statusReducer } from './status';
import { gameReducer } from './game';

export default combineReducers({
  status: statusReducer,
  game: gameReducer,
});
