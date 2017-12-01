import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = { currentUser: null };

const SessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  if (action.type === RECEIVE_CURRENT_USER) {
    return {currentUser: action.currentUser};
  } else {
    return oldState;
  }
};

export default SessionReducer;
