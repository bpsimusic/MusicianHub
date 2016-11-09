import * as Actions from "../actions/artist_actions";
import {merge} from "lodash";
const _default = {
      name: "",
      email: "",
      bio: "",
      image_url: "",
      songs: []
};

export const ArtistReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case Actions.RECEIVE_ARTIST:
      newState = action.artist;
      let copyState = merge({}, state);
      copyState.songs = [];
      return merge({}, copyState, newState);
    case Actions.CLEAR_ARTIST:
      newState = merge({}, state);
      newState = _default;
      return newState;
    default:
      return state;
  }
};
