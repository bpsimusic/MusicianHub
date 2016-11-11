import {combineReducers} from 'redux';
import {SessionReducer} from './session_reducer';
import {ArtistReducer} from './artist_reducer';
import {TrackPlayerReducer} from './track_player_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer,
  track_player: TrackPlayerReducer
});

export default rootReducer;
