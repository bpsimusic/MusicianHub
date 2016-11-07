# == Schema Information
#
# Table name: artists
#
#  id              :integer          not null, primary key
#  name            :string
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :string
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Artist < ActiveRecord::Base
  validates :username, :password_digest,
            :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :songs,
    :class_name => "Song",
    :foreign_key => :artist_id,
    :primary_key => :id


  def self.find_by_credentials(username, password)
    user = Artist.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
