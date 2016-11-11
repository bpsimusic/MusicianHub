import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.dispatchSongUrl = this.dispatchSongUrl.bind(this);
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

  dispatchSongUrl(song){
    return (e) => {
      this.props.addSong(song);
    };
  }



  render(){
    return (
      <div className="song-item">
        <label className="title">{this.props.song.title}
          <br></br>
          <div className="song-player">
        <button onClick={this.dispatchSongUrl(this.props.song)}>Test</button>
          </div>
        </label>
        {this.props.edit ? this.deleteButton(this.props.song) : null}
        {this.props.download ? this.downloadButton(this.props.song) : null}
        <br></br>
      </div>
    );
  }
}
export default SongIndexItem;
