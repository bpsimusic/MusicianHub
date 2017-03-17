import React from 'react';
import {Link, withRouter} from 'react-router';

class AuthModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.demologin = this.demologin.bind(this);
    this.login = this.login.bind(this);
    this.processForm = this.processForm.bind(this);
    this.signup = this.signup.bind(this);
    this.formType = this.props.formType;
  }

  demologin(){
    this.props.demologin({artist: {username: 'guest', password: 123456}})
    .then(
      /*callback gets executed after demologin. artist is a payload that
      contains the currentUser, and a type (RECEIVECURRENTUSER).
      It's an action, from session_actions.js dispatched on line 37.*/
      (artist) => {
          this.props.router.push(`/artists/${artist.currentUser.id}`);
        });
  }

  login(e){
    e.preventDefault();
    const artist = {username: this.state.username, password: this.state.password};
    this.props.processForm({artist})
    .then((user) => {
        this.props.router.push(`/artists/${user.currentUser.id}`);
      });
  }

  processForm(){
    if(this.props.formType === "Log In"){
      return this.login;
    } else {
      return this.signup;
    }
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
    this.props.processForm({artist})
    .then((user) => {
        this.props.router.push(`/artists/${user.currentUser.id}`);
      });
  }

  update(field){

    return e => {
      this.setState({
      [field]: e.currentTarget.value
    });};
  }

  render(){
    return (
      <div className="form-container">
        <h1>{this.props.formType === "Log In" ? "Login" : "Sign Up"}</h1>
        <form onSubmit={this.processForm()}>

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
              {this.props.formType}
          </button>
        </form>

          <button className={"demo"} onClick={this.demologin}>
            Demo Login
          </button>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(AuthModal);
