import {connect} from 'react-redux';
import ArtistInfo from './artist_info';
import {updateUser, createNewSong, deleteSong} from '../actions/session_actions';
//your current user is your current artist.
const mapStateToProps = ({session, artists}) => {
  return {
  currentUser: session.currentUser,
  errors: session.errors};
};

const mapDispatchToProps = (dispatch) => ({
  processUpdate: (artist)=>dispatch(updateUser(artist)),
  newSong: (song)=>dispatch(createNewSong(song)),
  deleteSong: (song)=>dispatch(deleteSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
