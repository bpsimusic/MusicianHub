import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
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



  render(){
    return (
      <div className="song-item">
        <label className="title">{this.props.song.title}
          <br></br>
          <div className="song-player">
          <ReactAudioPlayer src={this.props.song.song_url} />
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
