// import {requestUpdateArtist, receiveUpdateArtist, receiveErrors, REQUEST_UPDATE_ARTIST} from "../actions/artist_actions";
// import {updateArtist} from "../util/artist_api_util";
//
//
// const ArtistMiddleware = ({getState, dispatch}) => next => action => {
//     const successCallback = artist => dispatch(receiveUpdateArtist(artist));
//     const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));
//     switch(action.type) {
//       case REQUEST_UPDATE_ARTIST:
//         updateArtist(action.artist, successCallback, errorCallback);
//         return next(action);
//       default:
//         return next(action);
//     }
// };
//
// export default ArtistMiddleware;
