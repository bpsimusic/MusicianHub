import React from 'react';
import {Link} from 'react-router';

class SampleListItem extends React.Component {
  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
  }

  playSong(song, artist) {
    return (e) => {
      this.props.setToNull();
      setTimeout(this.props.addSong.bind(this, song, artist), 500);
    };
  }

  render(){
      return (
        <li className={"sample-artist"}>
          <div className={"play-button-image"}
            onClick={this.playSong(this.props.artist.song, this.props.artist)}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-play fa-stack-1x"></i>
            </span>
          </div>
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
