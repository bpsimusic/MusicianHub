import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {requestSampleArtists} from '../actions/sample_actions';


const mapStateToProps = ({search, sample}) => ({
  search: search,
  artists: sample.artists
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: ()=>dispatch(requestSampleArtists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
