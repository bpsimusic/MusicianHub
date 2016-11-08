import React from 'react';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
    function(error, images){
      if(error === null){
        this.props.postImage(images[0].url);
      }
    }.bind(this));
  }

  render(){
    return (
        <button onClick={this.upload.bind(this)}
                className="upload-image">
          Upload Image
        </button>
      );
    }
}




export default UploadButton;
