export const fetchArtist= (id, success, error) => {
  $.ajax({url: `/api/artists/${id}`,
  type: "get",
  dataType: 'json',
  success,
  error
});
};
