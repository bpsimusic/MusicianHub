import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';

//applymiddleware is a function, to combine all of your middleware.
const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
