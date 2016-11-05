import {connect} from 'react-redux';
import ArtistInfo from './artist_info';
import {updateUser} from '../actions/session_actions';
//your current user is your current artist.
const mapStateToProps = ({session, artists}) => {
  return {
  currentUser: session.currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  processUpdate: (artist)=>dispatch(updateUser(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
