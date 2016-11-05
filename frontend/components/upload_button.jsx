import React from 'react';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
    function(error, arrayImages){
      if(error === null){
        this.props.postImage(arrayImages[0].url);
      }
    }.bind(this));
  }

  render(){
    return (
        <button onClick={this.upload.bind(this)}>
          Upload
        </button>
      );
    }
}




export default UploadButton;
