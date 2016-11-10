import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout, demologin}) => {
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

                <li><Link to="/" onClick={demologin}>Demo Login</Link></li>
              </ul>
            </nav>
          </header>
        </header>
      </div>
    );
  }
};

export default Greeting;
