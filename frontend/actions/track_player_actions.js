export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const SET_TO_NULL = 'SET_TO_NULL';

export const addSongToQueue = (song, artist) => ({
  type: ADD_TO_QUEUE,
  song,
  artist
});


export const requestSampleSong = (song, artist) => ({
  type: ADD_TO_QUEUE,
  song,
  artist
});


export const setNull = () => ({
  type: SET_TO_NULL
});
