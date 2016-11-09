import React from 'react';
import {Link} from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: []};
    this.fetchArtists = this.fetchArtists.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.displaySearchResults = this.displaySearchResults.bind(this);
  }

  fetchArtists(e){
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
              <Link to={`/artists/${artist.id}`}><li key={idx}>
                {artist.artist}</li></Link>
          );
        })}
      </div>);
    else {
      return null;
    }
  }

  render(){

    return(
      <div className="searchbar">
        <label className="flex-container">
          <input type="text"
            onChange={this.fetchArtists}
            className="dropdown"
            placeholder="Search for Artists and Tracks"
            />

          <span className="glyphicon glyphicon-search"></span>

          <ul className="filler">
            {this.displaySearchResults()}
          </ul>

        </label>
      </div>
    );
  }
}


export default SearchBar;
