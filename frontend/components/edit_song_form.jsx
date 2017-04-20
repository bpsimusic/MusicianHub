import React from 'react';
import Modal from 'react-modal';
import styling from './style_songform_modal';
import UploadSongButton from './upload_song_button';
import {withRouter} from 'react-router';


class EditSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: true,title: this.getSongTitle(), song_url: "",song_count: this.props.currentUser.songs.length};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getSongTitle = this.getSongTitle.bind(this);
  }

  closeModal(){
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
    this.props.router.push(`/artists/${this.props.currentUser.id}`);
  }

  cancel(e){
    e.preventDefault();
    this.props.clearErrors();
    this.props.router.push(`/artists/${this.props.params.artistId}/`);
  }

  getSongTitle(){
    let song = this.props.currentUser.songs.find(el=>el.id == this.props.router.params.id);
    if (!song) return;
    return song.title;
  }

  provideUrl(url){
    this.setState({song_url: url});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const song = {song: {song_url: this.state.song_url,
                  id: this.props.router.params.id,
                  title: this.state.title,
                  artist_id: this.props.currentUser.id},
                  artist_id: this.props.currentUser.id};
    this.props.editSong(song)
    .then(() => {
    this.props.router.push(`/artists/${this.props.currentUser.id}`)});


    //do a promise.
  }

  openModal(){
    return (event)=>{
      event.preventDefault();
      this.setState({modalIsOpen: true});
    };
  }

  renderErrors() {

    return (
      <ul className="song-form-errors">
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
      <Modal
        isOpen={this.state.modalIsOpen}
        style={styling}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
        >
          <form className="song-form" onSubmit={this.handleSubmit.bind(this)}>
            <h1>Edit Song</h1>
            <label>Song Title &nbsp;
              <input type="text" value={this.state.title}
                onChange={this.updateField("title").bind(this)}/>
            </label>
            <br></br>
            <UploadSongButton url={this.provideUrl.bind(this)}/>

            <button className="submit-song">Submit Edits</button>
            <button onClick={this.cancel.bind(this)}
                    className="cancel-submit-song">Cancel</button>
          </form>
          {this.renderErrors()}
        </Modal>
    );
  }
}

export default withRouter(EditSongForm);
