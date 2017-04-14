import {requestUpdateArtist, receiveArtist, receiveErrors,
        REQUEST_ARTIST, REQUEST_ALL_ARTISTS, receiveAllArtists} from "../actions/artist_actions";
import {fetchArtist, fetchAllArtists} from "../util/artist_api_util";


const ArtistMiddleware = ({getState, dispatch}) => next => action => {
    const successCallback = artist => dispatch(receiveArtist(artist));
    const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
    const successAllArtists = artists => {
      dispatch(receiveAllArtists(artists))
    };
    switch(action.type) {
      case REQUEST_ALL_ARTISTS:

        fetchAllArtists(successAllArtists);
        return next(action);
      case REQUEST_ARTIST:
        fetchArtist(action.id, successCallback, errorCallback);
        return next(action);
      default:
        return next(action);
    }
};

export default ArtistMiddleware;
