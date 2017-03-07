import {connect} from 'react-redux';
import SongIndex from './song_index';
import {updateUser, createNewSong, newSong, deleteSong} from '../actions/session_actions';
import {addSongToQueue, setNull} from '../actions/track_player_actions.js';

const mapStateToProps = ({session, artist}) => {
  let user = session.currentUser || {songs: []};
  return {
  currentUser: user,
  songs: user.songs,
  artist};
};



const mapDispatchToProps = (dispatch) => ({
  newSong: (song)=>dispatch(createNewSong(song)),
  deleteSong: (song)=>dispatch(deleteSong(song)),
  addSongToQueue: (song, artist)=>{dispatch(addSongToQueue(song, artist));},
  setToNull: ()=>{dispatch(setNull());}
});



export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
