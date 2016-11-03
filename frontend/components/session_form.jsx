import React from 'react';
import {withRouter, Link} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidUpdate(){
    if (this.props.loggedIn){
      this.props.router.push(`/artists/${this.props.currentUser.id}`);
    }
  }
  //on submitting the form, you are processing the form.
  handleSubmit(e){
    e.preventDefault();
    const artist = this.state;

    //question about this syntax.
    //You're processing the {artist: {username: "", password: ""}}
    this.props.processForm({artist});
  }

  navLink(){
    if (this.props.formType === "login") {
      return (<Link to="signup">Sign Up here!</Link>);
    } else {
      return (<Link to="login">Login here!</Link>);
    }
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={i}>
              {error}
            </li>
          ))}
      </ul>
    );
  }
  render (){
    return (
      <div className="form-container">
        <h1>{this.props.formType === "signup" ? "Sign Up" : "Login"}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label>Username
            <br></br>
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
              size="28"/>
          </label>
          <br></br>
          <br></br>
          <label>Password
            <br></br>
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              size="28"/>
          </label>
          <br></br>
          <br></br>
          <input type="submit"
                 value={this.props.formType === "signup" ? "Sign Up" : "Login"}
                  />
          {this.renderErrors()}
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);