import { RECEIVE_ALL_CHANNELS } from "../actions/channel_actions";
import merge from 'lodash/merge';

const ChannelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    default:
      return oldState;
  }
};

export default ChannelsReducer;
