import React from 'react';
import ReactPlayer from 'react-player';
import Duration from './duration';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    url: "https://p.scdn.co/mp3-preview/415b97456eb53a1dec9cd655d1dfdb3531b2777a",
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


  render(){

    return (
      <div className="footer">

        <ReactPlayer url={this.state.url}
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
        <button onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</button>

        <label>Seek
          <input type='range' min={0} max={1} step='any'
                     value={this.state.played}
                     onMouseDown={this.onSeekMouseDown}
                     onChange={this.onSeekChange}
                     onMouseUp={this.onSeekMouseUp} />
        </label>



        <label> Volume
          <input type="range" min={0} max={1} step='any'
              value={this.state.volume}
             onChange={this.setVolume}/>
        </label>
      </div>
    );
  }
}
