import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {withRouter} from 'react-router';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.dispatchSong = this.dispatchSong.bind(this);
    this.editButton = this.editButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deleteButton(song){
    return (
      <button onClick={this.deletingSong(song)}
            className={"delete-click"}>Delete</button>
    );
  }


  deletingSong(song){
    let that = this;
    return function(e){
      that.props.deleteSong(song);
    };
  }


  downloadButton(song){
    return (
        <a href={`${song.song_url}`} download>
          <button className="download-button">
            Download
          </button>
        </a>


    );
  }

  dispatchSong(song, artist){
    return (e) => {
      this.props.setToNull();
      setTimeout(this.props.addSong.bind(this, song, artist), 100);
    };
  }

  editButton(song){
    return (
      <button className = "edit-song-form"
        onClick={this.handleClick(`/artists/${this.props.currentUser.id}/songs/${song.id}`)}>
        Edit
      </button>
    );
  }

  handleClick(url){
    let that = this;
    return function(e){
      that.props.router.push(url);
    };
  }


  render(){

    return (
      <div className="song-item">
        <label className="title">{this.props.song.title} &nbsp;
        </label>
        <br></br>
        <div className="util-section">
          <div className="song-player">
            <button onClick={this.dispatchSong(this.props.song, this.props.artist)}
                    className="play-click">Play</button>
          </div>
          {this.downloadButton(this.props.song)}
          {this.props.edit ? this.editButton(this.props.song) : null}
          {this.props.edit ? this.deleteButton(this.props.song) : null}

        <br></br>
        </div>
      </div>
    );
  }
}
export default withRouter(SongIndexItem);
