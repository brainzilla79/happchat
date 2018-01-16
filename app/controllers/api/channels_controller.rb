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
      render :show
    else 
      render json: @channel.errors.full_messages, status: 422 
    end 
  end 

  private 

  def channel_params
    params.require(:channel).premit(:name)
  end 
end
