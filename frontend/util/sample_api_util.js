export const fetchArtists= (success, error) => {
  $.ajax({url: "/api/artists/sample",
  type: "get",
  dataType: 'json',
  success,
  error
});
};
