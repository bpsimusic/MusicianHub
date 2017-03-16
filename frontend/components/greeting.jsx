import React from 'react';
import {Link, withRouter} from 'react-router';
import SearchBarContainer from './search_bar_container';
import Modal from 'react-modal';
import styling from './style_modal';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false, formType: "", username: "", password: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.demologin = this.demologin.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  componentWillUnmount(){
    this.closeModal();
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }
// {type: "LOGIN", artist: {username: 'guest', password: 123456}}
  demologin(){
    this.props.demologin({artist: {username: 'guest', password: 123456}})
    .then(
      /*callback gets executed after demologin. artist is a payload that
      contains the currentUser, and a type (RECEIVECURRENTUSER).
      It's an action, from session_actions.js dispatched on line 37.*/
      (artist) => {
          this.closeModal();
          this.props.router.push(`/artists/${artist.currentUser.id}`);
        });
  }

  login(e){
    e.preventDefault();
    const artist = this.state;
    this.props.login({artist});
  }

  openModal(){
    return (event)=>{
      this.setState({modalIsOpen: true, formType: event.currentTarget.innerText});
    };
  }

  renderErrors() {
    return (
      <ul className="errors-list">
          {this.props.errors.map((error, i) => (
            <li key={i}
                className="errors">
              {error}
            </li>
          ))}
      </ul>
    );
  }

  signup(e){
    e.preventDefault();
    const artist = {username: this.state.username, password: this.state.password};
    this.props.signup({artist});
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    if (this.props.currentUser){
      return (
        <div>
          <header className="header">
            <header className="header-container">
              <div className="header-logo">

                <Link to="/" className="home-page-revisit"><span className="fa fa-headphones" aria-hidden="true"></span>Musician Hub</Link>
                <SearchBarContainer />
              </div>

              <nav className="nav-container">
                <ul className="list-container">
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
                  <Link to="/" className="home-page-revisit"><span className="fa fa-headphones" aria-hidden="true"></span>Musician Hub</Link>
                  <SearchBarContainer />
                </div>
                <nav className="nav-container">
                  <ul className="list-container">
                    <li><button onClick={this.openModal()}>Sign Up</button></li>
                        <Modal
                          isOpen={this.state.modalIsOpen}
                          style={styling}
                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal"
                          >
                          <div className="form-container">
                            <h1>{this.state.formType == "Sign Up" ? "Sign Up" : "Login"}</h1>
                            <form onSubmit={this.signup}>

                              <label>Username
                                <br></br>
                                <input type="text"
                                  value={this.state.username}
                                  onChange={this.update("username")}
                                  className = {"sessionForm-input"}
                                  size="28"/>
                              </label>
                              <br></br>
                              <br></br>
                              <label htmlFor="password">Password</label>
                              <br></br>

                              <input id="password" type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                className = {"sessionForm-input"}
                                size="28"/>
                              <br></br>

                              <br></br>
                              <button className={"entry-button"}>
                                  {this.state.formType}
                              </button>
                            </form>

                              <button className={"demo"} onClick={this.demologin}>
                                Demo Login
                              </button>
                            {this.renderErrors()}
                          </div>
                      </Modal>
                      <li><button onClick={this.openModal()}>Log In</button></li>
                        <Modal
                          isOpen={this.state.modalIsOpen}
                          style={styling}
                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal"
                          >
                          <div className="form-container">
                            <h1>{this.state.formType == "Sign Up" ? "Sign Up" : "Login"}</h1>
                            <form onSubmit={this.login}>

                              <label>Username
                                <br></br>
                                <input type="text"
                                  value={this.state.username}
                                  onChange={this.update("username")}
                                  className = {"sessionForm-input"}
                                  size="28"/>
                              </label>
                              <br></br>
                              <br></br>
                              <label htmlFor="password">Password</label>
                              <br></br>

                              <input id="password" type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                className = {"sessionForm-input"}
                                size="28"/>
                              <br></br>

                              <br></br>
                              <button className={"entry-button"}>
                                  {this.state.formType}
                              </button>
                            </form>

                              <button className={"demo"} onClick={this.demologin}>
                                Demo Login
                              </button>
                            {this.renderErrors()}
                          </div>
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
