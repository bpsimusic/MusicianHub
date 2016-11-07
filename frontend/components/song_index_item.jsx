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


  render(){
    return (
      <div className="song-item">
        <label className="title">{this.props.song.title}
        <ReactAudioPlayer src={this.props.song.song_url} />
        </label>
        {this.props.edit ? this.deleteButton(this.props.song) : null}
      </div>
    );
  }
}
export default SongIndexItem;
