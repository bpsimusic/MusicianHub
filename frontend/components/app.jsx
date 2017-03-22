import React from 'react';
import GreetingContainer from './greeting_container';
import SongPlayerContainer from './song_player_container';
import {Link,withRouter} from 'react-router';
const App = ({children}) => (
  <div>
    <GreetingContainer />

    {children}

    <footer className="footer">
      <div className="footer-flex">
        <div className="logo-footer">
          <a href="#"></a>
          
        </div>
        <div className="company">
          <h4>Company</h4>
          <ul>
            <Link to="/"><li>About</li></Link>
            <Link to="/"><li>Press</li></Link>
            <Link to="/"><li>Blog</li></Link>
            <Link to="/"><li>Jobs</li></Link>
          </ul>
        </div>
        <div className="resources">
          <h4>Resources</h4>
            <ul>
              <Link to="/"><li>Guidelines</li></Link>
              <Link to="/"><li>Privacy</li></Link>
              <Link to="/"><li>Safety</li></Link>
              <Link to="/"><li>Help</li></Link>
            </ul>
        </div>
        <div className="community">
          <h4>Community</h4>
            <ul>
              <Link to="/"><li>Artists</li></Link>
              <Link to="/"><li>Events</li></Link>
              <Link to="/"><li>Groups</li></Link>
            </ul>
        </div>
      </div>

    </footer>
    <SongPlayerContainer />
  </div>
);

export default withRouter(App);
