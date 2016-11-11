import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.dispatchSong = this.dispatchSong.bind(this);
  }

  deleteButton(song){
    return (
      <button onClick={this.deletingSong(song)}>Delete</button>
    );
  }


  deletingSong(song){
    let that = this;
    return function(e){
      that.props.deleteSong(song)
    };
  }

  downloadButton(song){
    return (
      <div className="download-button">
        <a href={`${song.song_url}`} download>Download</a>
      </div>
    );
  }

  dispatchSong(song, artist){
    return (e) => {
      this.props.addSong(song, artist);
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
          {this.props.edit ? this.deleteButton(this.props.song) : null}
          {this.props.download ? this.downloadButton(this.props.song) : null}
        <br></br>
        </div>
      </div>
    );
  }
}
export default SongIndexItem;
