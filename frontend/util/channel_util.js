export const fetchAllChannels = () =>
  $.ajax({
    method: "GET",
    url: "api/channels"
  });

export const fetchChannelByName = channelName => 
  $.ajax({
    method: 'GET',
    url: `api/channels?name=${channelName}`
  });

export const createChannel = (channel, userIds) => 
  $.ajax({
    method: 'POST',
    url: `api/channels`,
    data: { channel, user_ids: userIds }
  });