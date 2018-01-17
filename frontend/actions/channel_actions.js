import * as ChannelAPIUtil from "../util/channel_util";

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const getAllChannels = () => dispatch =>
  ChannelAPIUtil.fetchAllChannels().then(channels =>
    dispatch(receiveAllChannels(channels))
  );

export const createChannel = (newChannel, userIds) => dispatch => 
  ChannelAPIUtil.createChannel(newChannel, userIds).then( channel => 
    dispatch(receiveChannel(channel))
  );
