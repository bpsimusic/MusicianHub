import {connect} from 'react-redux';
import DemoLogin from './demologin';

//your current user is your current artist.
const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DemoLogin);
