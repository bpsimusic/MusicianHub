import * as Actions from "../actions/sample_actions";
import {merge} from "lodash";
const _default = {
  artists: []
};

export const SampleReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case Actions.RECEIVE_ARTISTS:
      newState.artists = action.artists;
      return newState;
    case Actions.CLEAR_ARTISTS:
      newState.artists = [];
      return newState;
    default:
      return state;
  }
};
