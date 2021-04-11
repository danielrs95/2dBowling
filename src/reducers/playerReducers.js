import {
  PLAYER_LOGIN_FAIL,
  PLAYER_LOGIN_REQUEST,
  PLAYER_LOGIN_SUCCESS,
  SET_FIRST_PIN,
} from "../constants/playerConstants";

export const globalStateReducer = (
  state = {
    started: false,
    players: [],
    score: [],
    frame: [],
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

    case SET_FIRST_PIN:
      if (state.frame.length < 2) {
        // Almacenamos los pines en Frame
        return { ...state, frame: state.frame.concat(action.payload) };
      } else if (state.frame.length === 2) {
        // Cuando ya tenemos 2 pines, agregamos el valor al score
        return {
          ...state,
          score: state.score.concat([state.frame]),
          frame: [],
        };
      } else {
        console.log("Error");
      }

    default:
      return state;
  }
};
