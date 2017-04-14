export const fetchArtist= (id, success, error) => {
  $.ajax({url: `/api/artists/${id}`,
  type: "get",
  dataType: 'json',
  success,
  error
});
};

export const fetchAllArtists= (success, error) => {
  $.ajax({url: `/api/artists`,
  type: "get",
  dataType: 'json',
  success,
  error
});
};
