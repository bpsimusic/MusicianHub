import React from 'react';
import cloudinary from 'cloudinary';

let UploadButton = ()=>{
  const upload = (e)=>{
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
    function(error, arrayImages){
      if(error === null){

      }
    });
  };
  return (
    <button onClick={this.upload}>
      Upload
    </button>
  );
};

export default UploadButton;
