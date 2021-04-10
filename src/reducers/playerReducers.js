import {
  PLAYER_LOGIN_FAIL,
  PLAYER_LOGIN_REQUEST,
  PLAYER_LOGIN_SUCCESS,
} from "../constants/playerConstants";

export const playerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYER_LOGIN_REQUEST:
      return { loading: true };

    case PLAYER_LOGIN_SUCCESS:
      return { loading: false, player1: action.payload };

    case PLAYER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
