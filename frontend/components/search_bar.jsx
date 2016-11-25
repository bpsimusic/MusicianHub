import React from 'react';
import {Link} from 'react-router';
import SampleListItem from './sample_list_item';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {artists: []};
    this.fetchArtists = this.fetchArtists.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.displaySearchResults = this.displaySearchResults.bind(this);

  }

  componentWillMount(){
    this.props.fetchArtists();
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
      <div>
      <div className="searchbar">
        <video src="http://res.cloudinary.com/dndf8vddw/video/upload/v1479756222/v3v7nvs80vx962wryxl9.mp4"
          autoPlay
          loop
          className="video"/>
        <label className="flex-container">
          <input type="text"
            onChange={this.fetchArtists}
            className="dropdown"
            placeholder="Search for Artists and Tracks"
            />

          <i className="material-icons">search</i>
          <ul className="filler">
            {this.displaySearchResults()}
          </ul>

        </label>

        </div>

        <div className={"artist-profiles"}>
          <h1>Check Out Artist Profiles!</h1>

            <ul className={"artist-profiles-container"}>
              {this.props.artists.map((el, idx)=>{
                return <SampleListItem artist={el} key={idx} addSong={this.props.addSongToQueue}/>;
              })}
            </ul>
        </div>
        <footer></footer>
      </div>
    );
  }
}


export default SearchBar;
