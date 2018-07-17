import initialState from './initialState';
import { GAME_SET, GAME_RESET } from './actions';

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SET:
      return { ...state, ...payload };
    case GAME_RESET:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
