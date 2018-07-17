export const GAME_SET = 'GAME/SET';
export const GAME_RESET = 'GAME/RESET';

export const gameSet = payload => ({
  type: GAME_SET,
  payload,
});
export const gameReset = payload => ({
  type: GAME_RESET,
  payload,
});
