export const updateArtist= (artist, success, error) => {
  $.ajax({url: `/api/artists/${artist.id}`,
  type: "patch",
  data: artist,
  dataType: 'json',
  success,
  error
});
};
