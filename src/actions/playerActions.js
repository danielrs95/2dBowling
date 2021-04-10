import {
  PLAYER_LOGIN_FAIL,
  PLAYER_LOGIN_REQUEST,
  PLAYER_LOGIN_SUCCESS,
} from "../constants/playerConstants";

export const login = (name) => async (dispatch) => {
  try {
    dispatch({
      type: PLAYER_LOGIN_REQUEST,
    });

    dispatch({
      type: PLAYER_LOGIN_SUCCESS,
      payload: name,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
