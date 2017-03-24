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

  componentDidMount(){
    //customizing the searchBar to behave like a normal one
    document.addEventListener("click", function(e){
      let element = $(e.target);
      let dropdown = document.querySelector(".dropdown-content");
      if (element.hasClass("dropdown")){
        return ;
      } else if(element.parents(".dropdown-content").length === 0 ) {
        dropdown.classList.add("remove-results");
      }
    });

    let input = document.querySelector(".dropdown");
    input.addEventListener("click", function(){
      let dropdown = document.querySelector(".dropdown-content");
      if(dropdown){
        dropdown.classList.remove("remove-results");
      }
    });

  }

  componentWillReceiveProps(){
    //this clears the input whenever you leave the page
    this.setState({artists: [], searchInput: ""});
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
    // debugger
    this.setState({artists: artists});
  }

  displaySearchResults() {
    //clearForm clears the searchbar if one of the results is clicked.
    if (this.state.artists.length > 0)
      return (
        <div className="dropdown-content">
        {this.state.artists.map((artist, idx)=>{
          return (
              <Link to={`/artists/${artist.id}`} onClick={this.clearForm(artist)}>

                <li key={idx}>
                <img src={artist.image_url}></img>
                <span>{artist.artist}</span></li></Link>
          );
        })}
      </div>);
    else {
      return null;
    }
  }

  //the ul search-items-list is absolute positioned, so it's not in the flex of its parent div searchbar
  render(){

    return(
      <div className="searchbar">

          <input type="text"
            onChange={this.fetchArtists}
            className="dropdown"
            placeholder="Search for Artists and Tracks"
            value={this.state.searchInput}
            />

          <div className="searchbar-icon">
            <i className="material-icons">search</i>
          </div>

          <ul className="search-items-list">
            {this.displaySearchResults()}
          </ul>
      </div>
    );
  }
}


export default withRouter(SearchBar);
