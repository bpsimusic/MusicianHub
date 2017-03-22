export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const RECEIVE_SAMPLE_SONG = 'RECEIVE_SAMPLE_SONG';
export const REQUEST_SAMPLE_SONG = 'REQUEST_SAMPLE_SONG';
export const SET_TO_NULL = 'SET_TO_NULL';

export const addSongToQueue = (song, artist) => ({
  type: ADD_TO_QUEUE,
  song,
  artist
});

//id is the id of the artist you want the sample song from
export const requestSampleSong = (id) => ({
  type: REQUEST_SAMPLE_SONG,
  id
});

export const receiveSampleSong = (artist) => ({
  type: RECEIVE_SAMPLE_SONG,
  artist
});

export const setNull = () => ({
  type: SET_TO_NULL
});
