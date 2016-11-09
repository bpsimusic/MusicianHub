export const REQUEST_ARTIST = "REQUEST_ARTIST";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ARTIST = "CLEAR_ARTIST";

export const requestArtist = (id) => ({
  type: REQUEST_ARTIST,
  id
});

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearArtist = () => ({
  type: CLEAR_ARTIST,
});
