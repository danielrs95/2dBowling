import {
  PLAYER_LOGIN_FAIL,
  PLAYER_LOGIN_REQUEST,
  PLAYER_LOGIN_SUCCESS,
} from "../constants/playerConstants";

export const globalStateReducer = (
  state = {
    started: false,
    players: [],
    score: [],
    ended: false,
  },
  action
) => {
  switch (action.type) {
    case PLAYER_LOGIN_REQUEST:
      return { ...state, started: true };

    case PLAYER_LOGIN_SUCCESS:
      return { ...state, players: action.payload };

    case PLAYER_LOGIN_FAIL:
      return { ...state, started: false, error: action.payload };

    default:
      return state;
  }
};
