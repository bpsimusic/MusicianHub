import React from 'react';
import {Link, withRouter} from 'react-router';

class AuthModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {formType: this.props.formType, username: "", password: ""};
    this.demologin = this.demologin.bind(this);
    this.login = this.login.bind(this);
    this.processForm = this.processForm.bind(this);
    this.signup = this.signup.bind(this);
    this.formType = this.props.formType;
    this.swapForm = this.swapForm.bind(this);
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
    if(this.state.formType === "Log In"){
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

  swapForm() {
    this.props.clearErrors();
  		if (this.state.formType === "Log In") {
        this.setState({formType: 'Sign Up'});
  		} else {
  			this.setState({formType: 'Log In'});
      }
  }

  update(field){

    return e => {
      this.setState({
      [field]: e.currentTarget.value
    });};
  }

  render(){
    const introText = this.state.formType  === 'Log In' ? 'Don\'t have an account?' : 'Already have an account?';
    const otherFormType = this.state.formType === 'Log In' ? 'Create an account' : 'Login';

    return (
      <div className="form-container">
        <h1>{this.state.formType === "Login" ? "Login" : "Sign Up"}</h1>
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
              {this.state.formType}
          </button>
        </form>

          <button className={"demo"} onClick={this.demologin}>
            Demo Login
          </button>
          <div className='session-form-swap-text'>
            {introText}  <a className="login-link" onClick={() => this.swapForm()}>{otherFormType} instead!</a>
          </div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(AuthModal);
