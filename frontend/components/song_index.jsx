import React from 'react';
import UploadSongButton from './upload_song_button';
import SongIndexItem from './song_index_item';
import ReactAudioPlayer from 'react-audio-player';
import {withRouter} from 'react-router';


class SongIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleClick(url){
    return function(e){
      this.props.router.push(url);
    };
  }

  uploadSong(url){
    const song_url = url;
    const song = {song: {song_url, artist_id: this.props.songProps.currentUser.id}, artist_id: this.props.songProps.currentUser.id};
    this.props.songProps.newSong(song);
  }


  render(){
    return (
      <div className="songs-box">
        <ul>
            {this.props.songProps.currentUser.songs.map(function(el, idx){
              return <SongIndexItem song={el} key={idx}/>;
            })
          }
        </ul>
        <button onClick={this.handleClick(`/artists/${this.props.songProps.currentUser.id}/newsong`).bind(this)}>Upload New Song</button>
      </div>
    );
  }
}


export default withRouter(SongIndex);
