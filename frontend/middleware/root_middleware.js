import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ArtistMiddleware from './artist_middleware';
import SampleMiddleware from './sample_middleware';
import thunk from './thunk_middleware';
import createLogger from 'redux-logger';
//applymiddleware is a function, to combine all of your middleware.
const logger = createLogger();
const RootMiddleware = applyMiddleware(
  SessionMiddleware, ArtistMiddleware, SampleMiddleware, logger, thunk
);

export default RootMiddleware;
