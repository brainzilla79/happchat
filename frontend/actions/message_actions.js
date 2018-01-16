import * as MessageAPIUtil from "../util/message_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const getChannelMessages = channelId => dispatch =>
  MessageAPIUtil.fetchChannelMessages(channelId).then(messages =>
    dispatch(receiveAllMessages(messages))
  );

export const createChannelMessage = newMessage => dispatch =>
  MessageAPIUtil.postChannelMessage(newMessage).then(message =>
    dispatch(receiveMessage(message))
  );
