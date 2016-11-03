import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';
//applymiddleware is a function, to combine all of your middleware.
const logger = createLogger();
const RootMiddleware = applyMiddleware(
  SessionMiddleware, logger
);

export default RootMiddleware;
