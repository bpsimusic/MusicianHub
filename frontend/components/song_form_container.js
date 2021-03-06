import {connect} from 'react-redux';
import SongForm from './song_form';
import {updateUser, createNewSong} from '../actions/session_actions';
import {CLEAR_ERRORS} from '../actions/session_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artists}) => {
  return {
  currentUser: session.currentUser,
  errors: session.errors};
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: ()=>dispatch({type: CLEAR_ERRORS}),
  processUpdate: (artist)=>dispatch(updateUser(artist)),
  newSong: (song)=>dispatch(createNewSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongForm);
