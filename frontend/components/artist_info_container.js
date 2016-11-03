import {connect} from 'react-redux';
import ArtistInfo from './artist_info';
//your current user is your current artist.
const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);
