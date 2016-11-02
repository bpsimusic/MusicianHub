import React from 'react';
import {Provider} from 'react-redux';
import {Router, hashHistory, IndexRoute, Route} from 'react-router';
import App from './app';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Route>
    </Router>
  </Provider>);

};

export default Root;
