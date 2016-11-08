import React from 'react';
import UploadButton from './upload_button';
import SongIndex from './song_index';


class ArtistInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {edit: false,
                  bio: this.props.currentUser.bio,
                  images: [],
                  editSongs: false};
    this.activateEdit = this.activateEdit.bind(this);
  }

  activateEdit(){
    if(this.state.edit ===false){
      this.setState({edit: true});
    } else {
      this.setState({edit: false});
    }
  }

  bioEdit(){
    return (
    <div>
      {this.bio()}
      <br></br>
      <form onSubmit={this.handleSubmitBio.bind(this)}>
        <input type="text"
                onChange={this.update("bio")}
                value={this.state.bio}></input>
        <button>Submit</button>
      </form>
    </div>
    );
  }

  bio(){
    return (
      <p className="text">
        {(this.props.currentUser.id === this.props.artist.id) ?
          this.props.currentUser.bio :
          this.props.artist.bio}
      </p>
    );
  }

  cancel(){
    return (
        <button onClick={this.activateEdit}>Finish Editing</button>
    );
  }

  cancelEditSongs(){
    return (
        <button onClick={this.editSongs.bind(this)}>Cancel</button>
    );
  }

  editProfile(){
    if (this.props.currentUser.id === this.props.artist.id){
      return (
      <button className="edit"
        onClick={this.activateEdit}>Edit Profile</button>
      );
    } else {
      return null;
    }
  }

  editSongsButton(){
    if (this.props.currentUser.id === this.props.artist.id){
      return (
      <button onClick={this.editSongs.bind(this)}>Edit Songs</button>
      );
    } else {
      return null;
    }
  }

  editSongs(){
    if(this.state.editSongs ===false){
      this.setState({editSongs: true});
    } else {
      this.setState({editSongs: false});
    }
  }

  handleSubmitBio(e){
    e.preventDefault();
    const bio = this.state.bio;
    const artist = {artist: {bio}, id: this.props.currentUser.id};
    this.props.processUpdate(artist);
  }

  imageEdit(){
    return (
    <div>
      {this.image()}
      <UploadButton postImage={this.postImage.bind(this)} />
    </div>);
  }

  image(){
    return (
    <div>
      Artist Image
      <img src={(this.props.currentUser.id === this.props.artist.id) ?
        this.props.currentUser.image_url :
        this.props.artist.image_url}></img>
    </div>);
  }

  postImage(url){
    const image_url = url;
    const artist = {artist: {image_url}, id: this.props.currentUser.id};
    this.props.processUpdate(artist);
  }

  test(){
    return ;
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
        <div className="artist-info group">
          <div className="image">
            {this.state.edit ? this.imageEdit() : this.image()}
          </div>

          <div className="right-hand-container">
            {this.editProfile()}

            {this.state.edit ? this.cancel() : this.test()}

            <div className="bio">Bio
              <br></br>
              <br></br>
              {this.state.edit ? this.bioEdit() : this.bio()}
            </div>
            <br></br>
            <br></br>
            <div className="songindex">
              Song Index&nbsp;

              {this.editSongsButton()}
              &nbsp;
              {this.state.editSongs ? this.cancelEditSongs() : null}

              <SongIndex props={this.props} edit={this.state.editSongs}/>
            </div>
            {this.props.children}
          </div>
        </div>

    );
  }
}


export default ArtistInfo;
