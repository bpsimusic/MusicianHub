import {REQUEST_SAMPLE_ARTISTS, receiveArtists, receiveErrors} from "../actions/sample_actions";
import {fetchArtists} from "../util/sample_api_util";


const SampleMiddleware = ({getState, dispatch}) => next => action => {
    const successCallback = artists => dispatch(receiveArtists(artists));
    const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
    switch(action.type) {
      case REQUEST_SAMPLE_ARTISTS:
        fetchArtists(successCallback, errorCallback);
        return next(action);
      default:
        return next(action);
    }
};

export default SampleMiddleware;
