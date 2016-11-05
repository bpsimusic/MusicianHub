import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ArtistMiddleware from './artist_middleware';
import createLogger from 'redux-logger';
//applymiddleware is a function, to combine all of your middleware.
const logger = createLogger();
const RootMiddleware = applyMiddleware(
  SessionMiddleware, ArtistMiddleware, logger
);

export default RootMiddleware;
