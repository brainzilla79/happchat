import * as ChannelAPIUtil from "../util/channel_util";

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const getAllChannels = () => dispatch =>
  ChannelAPIUtil.fetchAllChannels().then(channels =>
    dispatch(receiveAllChannels(channels))
  );
