export const fetchChannelMessages = (channelId) =>
  $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages`
  });

export const postChannelMessage = message => 
  $.ajax({
    method: "POST",
    url: `/api/channels/${message.channel_id}/messages`,
    data: { message }
  });  