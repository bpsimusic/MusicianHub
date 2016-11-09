json.array!(@artists) do |artist|
  json.artist artist.name
  json.id artist.id
end
