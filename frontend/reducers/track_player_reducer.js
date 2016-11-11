import * as Actions from "../actions/track_player_actions";
import {merge} from "lodash";
const _default = {
      songs: [{}],
      artist: {}
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
      return newState;
    default:
      return state;
  }
};
