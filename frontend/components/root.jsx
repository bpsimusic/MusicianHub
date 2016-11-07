import React from 'react';
import {Provider} from 'react-redux';
import {Router, hashHistory, IndexRoute, Route} from 'react-router';
import App from './app';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import ArtistInfoContainer from './artist_info_container';
import SongIndexContainer from './song_index_container';
import SongFormContainer from './song_form_container';
import * as Actions from "../actions/session_actions";

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    store.dispatch({type: Actions.CLEAR_ERRORS});
    if (currentUser) {
      replace('/');
    }
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="artists/:artistId" component={ArtistInfoContainer} >
          <Route path="newsong" component={SongFormContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>);

};

export default Root;
