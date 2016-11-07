import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SongIndexItem = ({song}) => {
  return (
    <div className="song-item">
      <label className="title">{song.title}
      <ReactAudioPlayer src={song.song_url} />
      </label>
    </div>
  );
};

export default SongIndexItem;
