export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';


export const addSongToQueue = (song, artist) => ({
  type: ADD_TO_QUEUE,
  song,
  artist
});
