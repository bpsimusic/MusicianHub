import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';


const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: ()=>dispatch(logout()),
  demologin: ()=>dispatch({type: "LOGIN", artist: {artist: {username: 'guest', password: 123456}}})

});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
