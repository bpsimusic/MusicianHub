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
    if (this.props.loggedIn){
      this.props.router.push(`/artists/${this.props.loggedIn.id}`);
    } else {
      this.props.router.push("/signup");
    }
  }

  render(){
    return (
      <div>
        <div className="video-container">
          <div className="home-page-message">
            <h1>GET DISCOVERED</h1>
            <h3>Share your music with your fans</h3>
            <h3>Find music you love</h3>
          </div>
          <button onClick={this.signup} className={"create-profile-button"}>Create a Profile</button>

          <video src="https://s3.amazonaws.com/musicianhubaudio/musicianhubvid.mp4"
            autoPlay
            loop
            className="video"/>
        </div>
        <div className="video-mask">

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
