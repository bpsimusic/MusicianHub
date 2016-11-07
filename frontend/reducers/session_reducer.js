import * as Actions from "../actions/session_actions";
import {merge} from "lodash";
const _default = {
  currentUser: null,
  errors: []
};

export const SessionReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case Actions.RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return merge({}, state, newState);
    case Actions.RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.errors = action.errors;
      return merge({}, state, newState);
    case Actions.LOGOUT:
      newState.currentUser = null;
      newState.errors = [];
      return merge({}, state, newState);
    case Actions.CLEAR_ERRORS:
      let d = merge({}, state);
      d.errors = [];
      return d;
    case Actions.RECEIVE_NEW_SONG:
    debugger
      let e = merge({}, state);
      e.currentUser.songs.push(action.song);
      return e;
    case Actions.RECEIVE_SONG_ERRORS:
      newState.errors = action.errors;
      return merge({}, state, newState);
    default:
      return state;
  }
};
