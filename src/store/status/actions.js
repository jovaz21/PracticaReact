export const STATUS_SET = 'STATUS/SET';
export const STATUS_RESET = 'STATUS/RESET';

export const statusSet = payload => ({
  type: STATUS_SET,
  payload,
});
export const statusReset = payload => ({
  type: STATUS_RESET,
  payload,
});
