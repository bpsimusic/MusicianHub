export const REQUEST_ARTIST = "REQUEST_ARTIST";
export const REQUEST_ALL_ARTISTS = "REQUEST_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ARTIST = "CLEAR_ARTIST";

export const requestArtist = (id) => ({
  type: REQUEST_ARTIST,
  id
});

export const requestAllArtists = () => ({
  type: REQUEST_ALL_ARTISTS
});

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearArtist = () => ({
  type: CLEAR_ARTIST,
});
