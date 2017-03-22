import {REQUEST_SAMPLE_ARTISTS, receiveArtists, receiveErrors} from "../actions/sample_actions";
import {REQUEST_SAMPLE_SONG, receiveSampleSong} from "../actions/track_player_actions";
import {fetchArtists} from "../util/sample_api_util";
import {fetchArtist} from "../util/artist_api_util";


const SampleMiddleware = ({getState, dispatch}) => next => action => {
    const successCallback = artists => dispatch(receiveArtists(artists));
    const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
    
    //we will extract the song from the artist in the track_player_reducer
    const successSampleSongCallback = artist => dispatch(receiveSampleSong(artist))
    switch(action.type) {
      case REQUEST_SAMPLE_ARTISTS:
        fetchArtists(successCallback, errorCallback);
        return next(action);
      case REQUEST_SAMPLE_SONG:
        fetchArtist(action.id, successSampleSongCallback, errorCallback)
        return next(action);
      default:
        return next(action);
    }
};

export default SampleMiddleware;
