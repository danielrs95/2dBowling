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
      if (state.score.length > 0) {
        // El ultimo elemento del score
        const [lastItem] = state.score.slice(-1);
        let frameCount = state.score.length;
        let frame = state.score[frameCount - 1];
        let isStrike = frame.length === 1 ? frame[0] === 10 : false;

        if (lastItem.length < 2 && isStrike === false) {
          //Eliminamos el ultimo elemento del score
          state.score.pop();
          let newLastItem = lastItem.concat(action.payload);
          return {
            ...state,
            score: state.score.concat([newLastItem]),
          };
        } else if (lastItem.length === 2 && state.score.length < 10) {
          return {
            ...state,
            score: state.score.concat([action.payload]),
          };
        } else if (isStrike) {
          return {
            ...state,
            score: state.score.concat([action.payload]),
          };
        } else {
          console.log("10 frames reached");
        }
      } else {
        // Primer valor a agregar
        return {
          ...state,
          score: state.score.concat([action.payload]),
        };
      }

    default:
      return state;
  }
};
