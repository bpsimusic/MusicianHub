import {connect} from 'react-redux';
import Greeting from './greeting';
import {CLEAR_ERRORS,login,logout,signup,demologin} from '../actions/session_actions';


const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return ({
  clearErrors: ()=>dispatch({type: CLEAR_ERRORS}),
  demologin: (user)=>dispatch(demologin(user)),
  login: (artist)=>dispatch(login(artist)),
  logout: ()=>dispatch(logout()),
  signup: (artist)=>dispatch(signup(artist))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
