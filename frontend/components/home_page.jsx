import React from 'react';
import SampleListItem from './sample_list_item';
import Router from './sample_list_item';


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
  }

  componentWillMount(){
    this.props.fetchArtists();
  }

  componentWillUnmount(){
    this.props.clearArtists();
  }

  signup(){
    this.props.router.push("/signup");
  }

  render(){
    return (
      <div>
        <div className="video-container">
          <h1>GET DISCOVERED</h1>
          {this.props.loggedIn ? null : <button onClick={this.signup}>Create a Profile</button>}

          <video src="http://res.cloudinary.com/dndf8vddw/video/upload/v1479756222/v3v7nvs80vx962wryxl9.mp4"
            autoPlay
            loop
            className="video"/>
        </div>

          <div className={"artist-profiles"}>
            <h1>Check Out Artist Profiles!</h1>

              <ul className={"artist-profiles-container"}>
                {this.props.artists.map((el, idx)=>{
                  return <SampleListItem artist={el} key={idx} addSong={this.props.addSongToQueue}/>;
                })}
              </ul>
          </div>
        <footer></footer>
      </div>
    );
  }
}

export default HomePage;
