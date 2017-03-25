import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router';
import Duration from './duration';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    playing: false,
    duration: 0,
    volume: 0.1,
    played: 0,
    loaded: 0,
    url: null
    };
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.displayDownloadMessage = this.displayDownloadMessage.bind(this);
    this.removeDownloadMessage = this.removeDownloadMessage.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.displaySongInfo = this.displaySongInfo.bind(this);
    this.verticalSlider = this.verticalSlider.bind(this);
  }

// componentWillReceiveProps() is invoked before a mounted component receives new/updated props.
  componentWillReceiveProps(){
    //this.props.track_playing is from the previous props
     if (this.props.track_playing){
      this.setState({playing: true});
     }
   }

   displayDownloadMessage(){
     let downloadMessage = document.querySelector(".download-message");
     downloadMessage.style.display="block";
     let triangle = document.querySelector(".triangle");
     triangle.style.display="block";
   }

   displaySongInfo(){

     if(this.props.track_player_artist.image_url == undefined){
         let randomNumber = Math.floor(Math.random() * 20 + 2);
         this.props.requestSampleSong(randomNumber);
     } else {
       return (<section className={"artist-info-section"}>
                 <Link to={`/artists/${this.props.track_player_artist.id}`}>
                    <img src={this.props.track_player_artist.image_url}
                       className={"small-artist-image"} />;
                  </Link>

                   <Link to={`/artists/${this.props.track_player_artist.id}`}
                     className={"link-to-artist"}>
                     <div className="song-description">
                        <div>{this.props.track_player_artist.name}</div>

                        <div>{this.props.track_player.title}</div>
                      </div>
                  </Link>

                    <a href={`${this.props.track_player.song_url}`} download
                      className={"download-song-in-player"}
                      onMouseEnter={this.displayDownloadMessage}
                      onMouseOut={this.removeDownloadMessage}>

                      <div className={"download-icon"}></div>
                      <div className={"download-message"}>Download</div>
                      <div className={"triangle"}></div>
                    </a>

              </section>
        );
      }
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

  removeDownloadMessage(){
    let downloadMessage = document.querySelector(".download-message");
    downloadMessage.style.display="none";
    let triangle = document.querySelector(".triangle");
    triangle.style.display="none";
  }

  verticalSlider(){
    let sliderContainer = document.querySelector(".volume-slider-container")
    if (sliderContainer.classList.contains("visible")){
      sliderContainer.classList.remove("visible")
    } else {
      sliderContainer.classList.add("visible");
    }
  }

  render(){

    const {duration, played} = this.state;
    return (
      <div className="song-footer">
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
      <div className="song-display-container">
          <section className="song-controls group">
            <button className={"play-button"} onClick={this.playPause}>{this.state.playing ? this.pause() : this.play()}</button>

                <input type='range' min={0} max={1} step='any'
                           value={this.state.played}
                           onMouseDown={this.onSeekMouseDown}
                           onChange={this.onSeekChange}
                           onMouseUp={this.onSeekMouseUp}
                           className={"input-slider"}/>
                  <div className="elapsed">
                     <Duration seconds={duration * played} /> / <Duration seconds={duration} />
                   </div>

                      <div className="fa fa-volume-up" onMouseOver={this.verticalSlider} onMouseOut={this.verticalSlider}>
                        <div className={"volume-slider-container"}>

                          <input type="range" min={0} max={1} step='any'
                              value={this.state.volume}
                             onChange={this.setVolume}

                             className={"volume-slider"}/>
                       </div>
                      </div>
          </section>
          {this.displaySongInfo()}
        </div>
      </div>
    );
  }
}
