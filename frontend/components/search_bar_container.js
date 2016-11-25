import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {requestSampleArtists} from '../actions/sample_actions';
import {addSongToQueue} from '../actions/track_player_actions.js';

const mapStateToProps = ({search, sample}) => ({
  search: search,
  artists: sample.artists
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: ()=>dispatch(requestSampleArtists()),
  addSongToQueue: (song, artist)=>{dispatch(addSongToQueue(song, artist))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
