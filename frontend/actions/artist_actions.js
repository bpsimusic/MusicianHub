export const REQUEST_UPDATE_ARTIST = "REQUEST_UPDATE_ARTIST";
export const RECEIVE_UPDATE_ARTIST = "RECEIVE_UPDATE_ARTIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const requestUpdateArtist = (artist) => ({
  type: REQUEST_UPDATE_ARTIST,
  artist
});
export const receiveUpdateArtist = (artist) => ({
  type: RECEIVE_UPDATE_ARTIST,
  artist
});


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
