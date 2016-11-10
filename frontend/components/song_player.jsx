import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router';

class SongPlayer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer className="footer">
        <ReactAudioPlayer />
      </footer>
    );
  }
}


export default SongPlayer;
