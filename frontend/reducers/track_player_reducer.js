import * as Actions from "../actions/track_player_actions";
import {merge} from "lodash";
const _default = {
      songs: [{}],
      artist: {},
      playing: false
};

export const TrackPlayerReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case Actions.ADD_TO_QUEUE:
      newState = merge({}, state);
      newState.songs.shift();
      newState.songs.push(action.song);
      newState.artist = action.artist;
      newState.playing = true;
      return newState;
    case Actions.RECEIVE_SAMPLE_SONG:
      newState = merge({}, state);
      newState.songs.shift();
      newState.songs.push(action.artist.songs[0]);
      newState.artist = action.artist;
      newState.playing = true;
      return newState;
    case Actions.SET_TO_NULL:
      console.log("in null!");
      newState = merge({}, state);
      newState.songs.shift();
      let dummySong = {song_url: null};
      newState.songs.push(dummySong);
      newState.playing = false;
      return newState;
    default:
      return state;
  }
};
