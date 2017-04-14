import * as Actions from "../actions/artist_actions";
import {merge} from "lodash";
const _default = {
  artists: []
};

export const IndexReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  //action.artists is a giant array.
  switch(action.type){
    case Actions.RECEIVE_ALL_ARTISTS:
      newState = {};
      newState.artists = action.artists;
      return merge({}, newState);
    default:
      return state;
  }
};
