import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const SessionErrorsReduer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default SessionErrorsReduer;