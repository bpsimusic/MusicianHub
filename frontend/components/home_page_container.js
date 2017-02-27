import {connect} from 'react-redux';
import HomePage from './home_page';
import {requestSampleArtists, clearArtists} from '../actions/sample_actions';
import {addSongToQueue, setNull} from '../actions/track_player_actions.js';

const mapStateToProps = ({sample, session}) => ({
  artists: sample.artists,
  loggedIn: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: ()=>dispatch(requestSampleArtists()),
  clearArtists: ()=>dispatch(clearArtists()),
  addSongToQueue: (song, artist)=>{dispatch(addSongToQueue(song, artist))},
  demologin: ()=>dispatch({type: "LOGIN", artist: {artist: {username: 'guest', password: 123456}}}),
  setToNull: ()=>{dispatch(setNull());}
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
