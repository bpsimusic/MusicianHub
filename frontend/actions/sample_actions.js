export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const REQUEST_SAMPLE_ARTISTS = "REQUEST_SAMPLE_ARTISTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ARTISTS = "CLEAR_ARTISTS";


export const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const requestSampleArtists = () => ({
  type: REQUEST_SAMPLE_ARTISTS,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const clearArtists = () => ({
  type: CLEAR_ARTISTS
});
