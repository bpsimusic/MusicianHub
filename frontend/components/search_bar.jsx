import React from 'react';
import {withRouter, Link} from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: [], searchInput: ""};
    this.clearForm = this.clearForm.bind(this);
    this.fetchArtists = this.fetchArtists.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.displaySearchResults = this.displaySearchResults.bind(this);
  }

  clearForm(artist){
    let that = this;
    return function(e){
      e.preventDefault();
      that.setState({artists: [], searchInput: ""});
      that.props.router.push(`/artists/${artist.id}`);
    }
  }

  fetchArtists(e){
    this.setState({searchInput: e.currentTarget.value});
      $.ajax({
        url: "/api/artists/search",
        dataType: "json",
        method: "GET",
        data: {"query": e.currentTarget.value},
        success: this.renderResults
    });
  }

  renderResults(artists) {
    this.setState({artists: artists});
  }

  displaySearchResults() {
    if (this.state.artists.length > 0)
      return (
        <div className="dropdown-content">
        {this.state.artists.map((artist, idx)=>{
          return (
              <Link to={`/artists/${artist.id}`} onClick={this.clearForm(artist)}><li key={idx}>
                {artist.artist}</li></Link>
          );
        })}
      </div>);
    else {
      return null;
    }
  }
// <i className="material-icons">search</i>
  render(){
    return(
      <div className="searchbar">
        <label className="flex-container">
          <input type="text"
            onChange={this.fetchArtists}
            className="dropdown"
            placeholder="Search for Artists and Tracks"
            value={this.state.searchInput}
            />

          <ul className="filler">
            {this.displaySearchResults()}
          </ul>
        </label>
      </div>
    );
  }
}


export default withRouter(SearchBar);
