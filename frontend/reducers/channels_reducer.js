import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL } from "../actions/channel_actions";
import merge from 'lodash/merge';

const ChannelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel;
      return newState;
    default:
      return oldState;
  }
};

export default ChannelsReducer;
