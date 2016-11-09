import {connect} from 'react-redux';
import SearchBar from './search_bar';


const mapStateToProps = ({search}) => ({
  search: search,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
