import {connect} from 'react-redux';
import SongPlayer from './song_player';
import {login, signup} from '../actions/session_actions';

const mapStateToProps = ({track_player})=>({
  track_player: track_player.songs[0]
});

//where does location come from? a Route? Yes, it comes from the Route.

const mapDispatchToProps = (dispatch)=>({

});



export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);
