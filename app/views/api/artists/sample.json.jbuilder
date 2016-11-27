json.array!(@artists) do |artist|
  json.name artist.name
  json.image_url artist.image_url
  json.id artist.id
  json.song artist.songs[0]
end
