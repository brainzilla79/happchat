export const fetchAllChannels = () =>
  $.ajax({
    method: "GET",
    url: "api/channels"
  });

export const fetchChannelByName = (channelName) => 
  $.ajax({
    method: 'GET',
    url: `api/channels?name=${channelName}`
  });