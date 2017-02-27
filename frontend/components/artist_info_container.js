import {connect} from 'react-redux';
import ArtistInfo from './artist_info';
import {updateUser, createNewSong, deleteSong} from '../actions/session_actions';
import {addSongToQueue, setNull} from '../actions/track_player_actions.js';

//your current user is your current artist.
const mapStateToProps = ({session, artist}) => {
  let empty = session.currentUser || {songs: []};
  return {
  currentUser: empty,
  errors: session.errors,
  artist: artist};
};

const mapDispatchToProps = (dispatch) => ({
  processUpdate: (artist)=>dispatch(updateUser(artist)),
  newSong: (song)=>dispatch(createNewSong(song)),
  deleteSong: (song)=>dispatch(deleteSong(song)),
  addSongToQueue: (song, artist)=>{dispatch(addSongToQueue(song, artist));},
  setToNull: ()=>{dispatch(setNull());}
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
