import React from 'react';
import ReactPlayer from 'react-player';
import Duration from './duration';
import {Link} from 'react-router';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    playing: true,
    volume: 0.1,
    played: 0,
    loaded: 0,
    duration: 0
    };
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.displaySongInPlayer = this.displaySongInPlayer.bind(this);
  }



  playPause(){
    this.setState({ playing: !this.state.playing })
  }
  stop(){
    this.setState({ url: null, playing: false })
  }
  setVolume(e){
    this.setState({ volume: parseFloat(e.target.value) })
  }
  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }
  onSeekChange(e){
    this.setState({ played: parseFloat(e.target.value) });
  }
  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }
  onProgress(nextState) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(nextState);
    }
  }

  pause(){
    return(
      <i className="fa fa-pause"></i>
    );
  }

  play(){
    return(
      <i className="fa fa-play" ></i>
    );
  }

  displaySongInPlayer(){
    if (this.props.track_player.title===undefined){
      return null;
    }  else {
      return (
        `: ${this.props.track_player.title}`
      );
    }
  }

  render(){
    return (
      <div className="footer">
        <ReactPlayer url={this.props.track_player.song_url}
          ref={player => { this.player = player; }}
          playing={this.state.playing}
          width={0}
          height={0}
          hidden={false}
          className={"sound-player"}
          volume={this.state.volume}
          onProgress={this.onProgress}
          onDuration={duration => this.setState({ duration })}
        />
      <section className="song-controls group">
        <button className={"play-button"} onClick={this.playPause}>{this.state.playing ? this.pause() : this.play()}</button>

          <label className={"song-slider"}>Seek <br></br>
            <input type='range' min={0} max={1} step='any'
                       value={this.state.played}
                       onMouseDown={this.onSeekMouseDown}
                       onChange={this.onSeekChange}
                       onMouseUp={this.onSeekMouseUp}
                       className={"input-slider"}/>
          </label>

          <label className={"song-slider"}> Volume <br></br>
            <input type="range" min={0} max={1} step='any'
                value={this.state.volume}
               onChange={this.setVolume}
               className={"input-slider"}/>
          </label>
      </section>
        <section className={"artist-info-section"}>
          <Link to={`/artists/${this.props.track_player_artist.id}`}>
          <img src={this.props.track_player_artist.image_url}

               className={"small-artist-image"}></img></Link>
               <Link to={`/artists/${this.props.track_player_artist.id}`}
                 className={"link-to-artist"}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.track_player_artist.name}</Link>
          <Link to={`/artists/${this.props.track_player_artist.id}`}
            className={"link-to-artist"}>{this.displaySongInPlayer()}</Link>
        </section>
      </div>
    );
  }
}
