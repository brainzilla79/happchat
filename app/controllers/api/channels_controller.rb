class Api::ChannelsController < ApplicationController

  def index
    @channels = current_user.channels
    render :index
  end 

  def show
    if params[:name]
      @channel = Channel.find_by(name: params[:name])
    else
      @channel = Channel.find(params[:id])
    end 
    render :show
  end 

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      user_ids = params["user_ids"]
      # debugger
      user_ids << current_user.id
      user_ids.each { |user_id| subscribe_user(user_id, @channel.id) }
      render :show
    else 
      render json: @channel.errors.full_messages, status: 422 
    end 
  end 

  private 

  def channel_params
    params.require(:channel).permit(:name)
  end 

  def subscribe_user(user_id, channel_id)
    membership = ChannelMembership.new(user_id: user_id, channel_id: channel_id)
    membership.save!
  end

end
