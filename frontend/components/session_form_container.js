import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../actions/session_actions';

const mapStateToProps = ({session})=>({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

//where does location come from? a Route? Yes, it comes from the Route.

const mapDispatchToProps = (dispatch, {location})=>{
  const formType = location.pathname.slice(1);
  //the login and signup are the actions creaters. Where do you get the user?
  const processForm = (formType === "login") ? login : signup;
  return {
    processForm: (artist)=>{dispatch(processForm(artist))},
    formType
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
