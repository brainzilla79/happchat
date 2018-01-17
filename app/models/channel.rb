# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: :true, uniqueness: true
  has_many :messages, dependent: :destroy
  has_many :channel_memberships, dependent: :destroy
  has_many :channels, through: :channel_memberships


end
