import React from 'react';
import styling from './cloudinary_upload';

class UploadSongButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {uploadSuccess: false};
    this.success = this.success.bind(this);
  }

  componentDidMount() {

    let upload = cloudinary.createUploadWidget(
      {cloud_name: "dndf8vddw", upload_preset: "sm4hesi5",
        stylesheet: styling, inline_container: ".my-upload",
      client_allowed_formats: ["wav", "mp3"]},
    function(error, song){
      if(!error){
        this.props.url(song[0].url);
        upload.close();
				this.setState({
					uploadSuccess: true
				});
      }
    }.bind(this));
    upload.open();

  }



  success(){

    if (this.state.uploadSuccess===true) {

      return (
        <div className="successful-upload">
          Successfully Uploaded!
        </div>
      );
    }
  }

  render(){
    return (

      <div>
        <div className="my-upload">
          {this.success()}
        </div>
        <div className="accepted-formats">Accepted formats: &nbsp; mp3 wav</div>
      </div>
      );
    }
}




export default UploadSongButton;
