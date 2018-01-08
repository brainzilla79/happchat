import { RECEIVE_ALL_MESSAGES } from '../actions/message_actions';
import merge from 'lodash/merge';

const MessageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    default: 
      return oldState;
  }
};

export default MessageReducer;