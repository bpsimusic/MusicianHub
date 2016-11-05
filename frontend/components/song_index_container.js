import {connect} from 'react-redux';
import SongIndex from './song_index_container';

const mapStateToProps = ({session, artists}) => {
  return {
  currentUser: session.currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  processUpdate: (artist)=>dispatch(updateUser(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
