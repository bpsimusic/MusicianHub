import {connect} from 'react-redux';
import ArtistInfo from './artist_info';
import {requestUpdateArtist} from '../actions/artist_actions';
//your current user is your current artist.
const mapStateToProps = ({session, artists}) => {
  let id = null;
  if (session.currentUser){
    id = session.currentUser.id;
  }
  let artist = artists[id] || {};

  return {
  artist,
  currentUser: session.currentUser};
  // artist: Object.keys(state.posts).map(id => state.posts[id])};
};

const mapDispatchToProps = (dispatch) => ({
  processUpdate: (artist)=>dispatch(requestUpdateArtist(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
