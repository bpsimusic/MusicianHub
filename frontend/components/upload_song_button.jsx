import React from 'react';

class UploadSongButton extends React.Component {
  constructor(props){
    super(props);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
    function(error, song){
      if(error === null){
        this.props.url(song[0].url);
      }
    }.bind(this));
  }

  render(){
    return (
        <button onClick={this.upload.bind(this)}
                className="upload-song-file">
          Upload Song File
        </button>
      );
    }
}




export default UploadSongButton;
