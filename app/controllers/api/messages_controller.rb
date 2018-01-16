class Api::MessagesController < ApplicationController
  def index
    channel = Channel.includes(:messages).find(params[:channel_id])
    @messages = channel.messages.includes(:user)
    render :index
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save!
      render :show
    else 
      render json: @message.errors.full_messages, status: 422
    end 
  end

  private 

  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
