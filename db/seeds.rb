# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require_relative "1000_artists.rb"

a = Artist.create(username: 'guest', password: 123456)
Song.create(title: "Work", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/4f6c0c8be9f6ccd01a2dd0439897503b56e4c777")
Song.create(title: "A-Yo", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/380f0412c30a0c7abd92c8ee4ebdbea74946be05")
Song.create(title: "In Common", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/d262bf3e9e0a16dad3e1d223871033a7d70267ae")
Song.create(title: "We Are Never Ever Getting Back Together", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/fbf998b44136c3dcf90d412cf1cb27c3b8623735?cid=null")
Song.create(title: "Not a Bad Thing", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/6b17b9987d6e5c2eaafb55ff2fe555294722dd2e")
Song.create(title: "XO", artist_id: a.id, song_url: "https://p.scdn.co/mp3-preview/df9b5efc4577e9ef65491b5a3f74f3cf428297d3")



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
