import * as Actions from "../actions/artist_actions";
import {merge} from "lodash";
const _default = {
  1: {name: "Rihanna",
      email: "rfenty@gmail.com",
      bio: "a cool singer",
      image_url: "sdfkjlas.com",
      songs: {
        1: {title: "Don't Stop the Music",
            artist_id: 1}
      }
    },
};

export const ArtistsReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case Actions.RECEIVE_UPDATE_ARTIST:
      newState[action.artist.id] = action.artist;
      return merge({}, state, newState);
    default:
      return state;
  }
};
