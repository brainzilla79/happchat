import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const getChannelMessages = (channelId) => dispatch =>
  MessageAPIUtil.fetchChannelMessages(channelId).then(messages =>
    dispatch(receiveAllMessages(messages))
  );
