json.array!(@artists) do |artist|
  json.artist artist.name
  json.id artist.id
  json.image_url artist.image_url
end
