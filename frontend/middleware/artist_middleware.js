import {requestUpdateArtist, receiveArtist, receiveErrors,
        REQUEST_ARTIST} from "../actions/artist_actions";
import {fetchArtist} from "../util/artist_api_util";


const ArtistMiddleware = ({getState, dispatch}) => next => action => {
    const successCallback = artist => dispatch(receiveArtist(artist));
    const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
    switch(action.type) {
      case REQUEST_ARTIST:
        fetchArtist(action.id, successCallback, errorCallback);
        return next(action);
      default:
        return next(action);
    }
};

export default ArtistMiddleware;
