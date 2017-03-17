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
    logout: ()=>dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
