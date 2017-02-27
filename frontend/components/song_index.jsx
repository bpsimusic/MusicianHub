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

  artistSongsOrCurrentUserSongs(){
    let that = this;

    if (this.props.props.currentUser.id === this.props.props.artist.id){
      return (
        this.props.props.currentUser.songs.map(function(el, idx){
          return <SongIndexItem song={el}
            key={idx}
            edit={that.props.edit}
            deleteSong={that.props.props.deleteSong}
            addSong = {that.props.props.addSongToQueue}
            setToNull = {that.props.props.setToNull}
            artist = {that.props.props.artist}/>;
        })
      );
    } else {
      return (
        this.props.props.artist.songs.map(function(el, idx){
          return <SongIndexItem song={el}
            key={idx}
            edit={that.props.edit}
            deleteSong={that.props.props.deleteSong}
            download={true}
            addSong = {that.props.props.addSongToQueue}
            setToNull = {that.props.props.setToNull}
            artist = {that.props.props.artist}/>;
        })
      );
    }
  }

  handleClick(url){
    return function(e){
      this.props.router.push(url);
    };
  }

  uploadNewSongButton(){
    if (this.props.props.currentUser.id === this.props.props.artist.id){
      return (
      <button onClick={this.handleClick(`/artists/${this.props.props.currentUser.id}/newsong`).bind(this)}>Upload New Song</button>
      );
    } else {
      return null;
    }
  }
  uploadSong(url){
    const song_url = url;
    const song = {song: {song_url, artist_id: this.props.props.currentUser.id}, artist_id: this.props.props.currentUser.id};
    this.props.props.newSong(song);
  }


  render(){
    let that = this;
    return (
      <div className="songs-box">
        <ul>
            {this.artistSongsOrCurrentUserSongs()}
        </ul>
        {this.uploadNewSongButton()}
      </div>
    );
  }
}


export default withRouter(SongIndex);
