import {connect} from 'react-redux';
import SongPlayer from './song_player';
import {login, signup} from '../actions/session_actions';

const mapStateToProps = ({track_player})=>({
  track_player: track_player.songs[0],
  track_player_artist: track_player.artist,
  track_playing: track_player.playing
});


const mapDispatchToProps = (dispatch)=>({

});



export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);
