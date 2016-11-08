import React from 'react';
import UploadSongButton from './upload_song_button';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", song_url: "",song_count: this.props.currentUser.songs.length};
  }

  componentDidUpdate(){
    if (this.props.currentUser.songs.length > this.state.song_count){
      this.props.router.push(`/artists/${this.props.currentUser.id}`);
    }
  }

  cancel(e){
    e.preventDefault();
    this.props.router.push(`/artists/${this.props.params.artistId}/`);
  }

  provideUrl(url){
    this.setState({song_url: url});
  }

  handleSubmit(e) {
    e.preventDefault();
    const song = {song: {song_url: this.state.song_url,
                  title: this.state.title,
                  artist_id: this.props.currentUser.id},
                  artist_id: this.props.currentUser.id};
    this.props.newSong(song);
    // if song creation is successful, remove form and go back to artist page.
  }

  renderErrors() {
    return (
      <ul>
          {this.props.errors.map((error, i) => (
            <li key={i}
                className="errors">
              {error}
            </li>
          ))}
      </ul>
    );
  }

  updateField(field){
    return function(e){
      this.setState({
      [field]: e.target.value
    });
  };
  }

  render () {
    return (
      <div>
        <form className="song-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>Song Title &nbsp;
            <input type="text" value={this.state.title}
              onChange={this.updateField("title").bind(this)}/>
          </label>
          <br></br>
          <UploadSongButton url={this.provideUrl.bind(this)}/>
          <label> &nbsp;
            <input type="text" value={this.state.song_url}></input>
          </label>
          <br></br>
          <button className="submit-song">Submit Song</button>
          <button onClick={this.cancel.bind(this)}
                  className="cancel-submit-song">Cancel</button>
        </form>

        {this.renderErrors()}
      </div>
    );
  }
}

export default SongForm;
