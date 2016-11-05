import {combineReducers} from 'redux';
import {SessionReducer} from './session_reducer';
import {ArtistsReducer} from './artist_reducer';

const rootReducer = combineReducers({
  artists: ArtistsReducer,
  session: SessionReducer
});

export default rootReducer;
