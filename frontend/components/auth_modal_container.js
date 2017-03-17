import { connect } from 'react-redux';
import AuthModal from './auth_modal';
import {CLEAR_ERRORS,login,logout,signup,demologin} from '../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.formType;
  let processForm;
  processForm = (formType === "Log In") ? login : signup;


  return {
    clearErrors: ()=>dispatch({type: CLEAR_ERRORS}),
    processForm: (artist)=>dispatch(processForm(artist)),
    demologin: (user)=>dispatch(demologin(user)),
    logout: ()=>dispatch(logout()),
    formType
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);
