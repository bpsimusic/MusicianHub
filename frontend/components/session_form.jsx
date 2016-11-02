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
      this.props.router.push("/");
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
      <ul>
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
      <div>
        <h1>Please {this.props.formType}! or {this.navLink()} </h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}/>
          </label>
          <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
