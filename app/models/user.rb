# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_email_format_of :email, :message => 'Invalid email address'

  has_many :messages
  has_many :channel_memberships, dependent: :destroy
  has_many :channels, through: :channel_memberships
  
  attr_reader :password

  after_initialize :ensure_session_token
  after_create :add_to_general

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end 

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end 

  def add_to_general
    general = Channel.find_by(name: "General")
    ChannelMembership.create!(user_id: self.id, channel_id: general.id)
  end 
end
