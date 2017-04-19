import React from 'react';
import {Link, withRouter} from 'react-router';
import SearchBarContainer from './search_bar_container';
import Modal from 'react-modal';
import styling from './style_modal';
import AuthModalContainer from './auth_modal_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false, formType: "", username: "", password: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.displayUploadMessage = this.displayUploadMessage.bind(this);
    this.removeUploadMessage = this.removeUploadMessage.bind(this);
    this.signInMessage = this.signInMessage.bind(this);
  }


  componentWillMount(){
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(){
    if(this.props.loggedIn){
      this.setState({modalIsOpen: false});
    }
  }

  closeModal(){
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

  displayUploadMessage(){
    let uploadMessage = document.querySelector(".upload-message");
    uploadMessage.style.display="inline-block";
    let triangle = document.querySelector(".upload-triangle");
    triangle.style.display="inline-block";
  }


  openModal(){
    return (event)=>{
      event.preventDefault();
      this.setState({modalIsOpen: true, formType: event.currentTarget.innerText});
    };
  }

  removeUploadMessage(){
    let uploadMessage = document.querySelector(".upload-message");
    uploadMessage.style.display="none";
    let triangle = document.querySelector(".upload-triangle");
    triangle.style.display="none";
  }

  signInMessage(){
    if (!document.querySelector("sign-in-message")) {
      let signInMessage = document.createElement("div");
      signInMessage.className = "sign-in-message";
      signInMessage.innerText = "Please Login";
      document.querySelector("body").appendChild(signInMessage);
    }
    $(".sign-in-message").delay(800).fadeOut(2000);
  }

  render(){
    if (this.props.currentUser){
      return (
        <div>
          <header className="header">
            <header className="header-container">
              <div className="header-logo">

                <Link to="/" className="home-page-revisit"><img className="headphones" src=
                "http://res.cloudinary.com/dndf8vddw/image/upload/v1489783203/whiteheadphones_cz8yi8.png"/>
                <div className="musician-hub">Musician Hub</div>
                </Link>
                <SearchBarContainer />
              </div>

              <nav className="nav-container">
                <ul className="list-container">
                  <li><Link to={`/artists/${this.props.currentUser.id}/newsong`}>
                    <div className="upload-icon"
                      onMouseEnter={this.displayUploadMessage}
                      onMouseOut={this.removeUploadMessage}></div>
                    <div className="upload-message">Upload</div>
                    <div className="upload-triangle"></div>
                  </Link></li>
                  <li><Link to={`/artists/${this.props.currentUser.id}`}>Profile</Link></li>
                  <li><Link to="/" onClick={this.props.logout}>Logout</Link></li>
                </ul>
              </nav>
            </header>
          </header>
        </div>
      );
    } else {
        return (
          <div>
            <header className="header">
              <header className="header-container">
                <div className="header-logo">
                  <Link to="/" className="home-page-revisit">
                    <img className="headphones" src=
                    "http://res.cloudinary.com/dndf8vddw/image/upload/v1489783203/whiteheadphones_cz8yi8.png"/>
                  <div className="musician-hub">Musician Hub</div>
                  </Link>
                  <SearchBarContainer />
                </div>
                <nav className="nav-container">
                  <ul className="list-container">
                    <li>
                      <div className="upload-icon"
                        onClick={this.signInMessage}
                        onMouseEnter={this.displayUploadMessage}
                        onMouseOut={this.removeUploadMessage}></div>
                      <div className="upload-message">Upload</div>
                      <div className="upload-triangle"></div>
                    </li>
                    <li><a onClick={this.openModal()}>Sign Up</a></li>
                    <li><a onClick={this.openModal()}>Login</a></li>
                      <Modal
                          isOpen={this.state.modalIsOpen}
                          style={styling}
                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal"

                          >
                          <AuthModalContainer formType={this.state.formType}/>
                      </Modal>
                  </ul>
                </nav>
              </header>
            </header>
          </div>
        );
      }
  }
}



export default withRouter(Greeting);
