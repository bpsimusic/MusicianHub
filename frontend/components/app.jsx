import React from 'react';
import GreetingContainer from './greeting_container';
import SongPlayerContainer from './song_player_container';

const App = ({children}) => (
  <div>
    <GreetingContainer />

    {children}
    
    <SongPlayerContainer />
  </div>
);

export default App;
