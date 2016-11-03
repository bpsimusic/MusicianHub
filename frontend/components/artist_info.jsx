import React from 'react';


class ArtistInfo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="Image">Artist Image</div>
        <div className="Bio">Bio</div>
        <div className="SongIndex">SongIndex</div>

      </div>
    );
  }
}


export default ArtistInfo;
