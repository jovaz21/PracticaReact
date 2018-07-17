import initialState from './initialState';
import { STATUS_SET, STATUS_RESET } from './actions';

const statusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STATUS_SET:
      return { ...state, ...payload };
    case STATUS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default statusReducer;
