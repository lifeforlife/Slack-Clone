import constants from "@/constants";

const initialState = {
  user: {},
  error: ""
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.AUTO_LOGIN:
      newState.user = action.payload.user;
      return newState;

    case constants.LOGIN_USER:
      newState.user = action.payload.user;
      newState.error = "";
      return newState;

    case constants.LOGOUT_USER:
      newState.user = {};
      newState.error = "";
      return newState;
    default:
      return state;
  }
};
