import {connect} from 'react-redux';
import EditSongForm from './edit_song_form';
import {updateUser, createNewSong, editSong} from '../actions/session_actions';
import {CLEAR_ERRORS} from '../actions/session_actions';

//your current user is your current artist.
const mapStateToProps = ({session, artist}) => {
  return {
  artist,
  currentUser: session.currentUser,
  errors: session.errors};
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: ()=>dispatch({type: CLEAR_ERRORS}),
  processUpdate: (artist)=>dispatch(updateUser(artist)),
  editSong: (song)=>dispatch(editSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongForm);
