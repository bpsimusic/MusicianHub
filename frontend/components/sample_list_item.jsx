import React from 'react';
import {Link} from 'react-router';

class SampleListItem extends React.Component {
  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
  }

  playSong(song, artist) {
    return (e)=>{
      this.props.addSong(song, artist);
    };
  }

  render(){
      return (
        <li className={"sample-artist"}>
          <img src={this.props.artist.image_url}
               className={"sample-artist-image"}
               onClick={this.playSong(this.props.artist.song, this.props.artist)}>
          </img>

             <br></br>
          <Link to={`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
        </li>
      );
  }
}

export default SampleListItem;
