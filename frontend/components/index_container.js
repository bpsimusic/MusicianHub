import {connect} from 'react-redux';
import Index from './index';

const mapStateToProps = ({index}) => ({
  artists: index.artists
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Index);
