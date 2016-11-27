import React from 'react';
import {Link, withRouter} from 'react-router';

const Greeting = ({currentUser, logout, router}) => {
  if(currentUser){
    return (
      <div>
        <header className="header">
          <header className="header-container">
            <div className="header-logo">
              <Link to="/">Musician Hub</Link>
            </div>

            <nav className="nav-container">
              <ul className="list-container">
                <li><Link to={`/artists/${currentUser.id}`}>Profile</Link></li>
                <li><Link to="/" onClick={logout}>Logout</Link></li>
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
              <Link to="/">Musician Hub</Link>
            </div>

            <nav className="nav-container">
              <ul className="list-container">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          </header>
        </header>
      </div>
    );
  }
};

export default withRouter(Greeting);
