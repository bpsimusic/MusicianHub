import {connect} from 'react-redux';
import SongIndex from './song_index';
import {newSong, deleteSong} from '../actions/session_actions.js';

const mapStateToProps = ({session}) => {
  return {
  currentUser: session.currentUser,
  songs: session.currentUser.songs};
};



const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
