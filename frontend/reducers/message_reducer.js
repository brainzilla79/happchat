import {
  RECEIVE_ALL_MESSAGES,
  RECEIVE_MESSAGE
} from "../actions/message_actions";
import merge from "lodash/merge";

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    default:
      return oldState;
  }
};

export default MessageReducer;
