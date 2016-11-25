json.array!(@artists) do |artist|
  json.name artist.name
  json.image artist.image_url
  json.id artist.id
end
