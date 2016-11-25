export const fetchArtists= (success, error) => {
  $.ajax({url: "/api/artists/",
  type: "get",
  dataType: 'json',
  success,
  error
});
};
