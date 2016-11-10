# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require_relative "1000_artists.rb"

Artist.create(username: 'guest', password: 123456)

@list.each do |artist|
  begin
    artists = RSpotify::Artist.search(artist)
    artist = artists.first
    name = artist.name
    genres = artist.genres.join(" ")
    sample_album = artist.albums.first
    sample_image = sample_album.images.first["url"]
    tracks = sample_album.tracks

    sample_artist = Artist.create(name: name, bio: genres,
                                username: artist.name, password: 123456, image_url: sample_image)

    tracks.each do |track|
      preview_url = track.preview_url
      Song.create(song_url: preview_url, title: track.name, artist_id: sample_artist.id)
    end

  rescue
    next
  end
end
