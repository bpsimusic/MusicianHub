# == Schema Information
#
# Table name: songs
#
#  id        :integer          not null, primary key
#  title     :string           not null
#  artist_id :integer          not null
#  song_url  :string           not null
#

class Song < ActiveRecord::Base
  validates :title, :artist_id,
            :song_url, presence: true

  belongs_to :artist,
    :class_name => "Artist",
    :foreign_key => :artist_id,
    :primary_key => :id
end
