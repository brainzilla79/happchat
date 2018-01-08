export const fetchChannelMessages = (channelId) =>
  $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages`
  });