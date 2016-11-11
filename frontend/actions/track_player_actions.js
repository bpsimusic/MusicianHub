export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';


export const addSongToQueue = (song) => ({
  type: ADD_TO_QUEUE,
  song
});
