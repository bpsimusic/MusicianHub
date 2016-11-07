import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import merge from 'lodash/merge';
import {update} from './util/artist_api_util';

document.addEventListener("DOMContentLoaded", ()=>{
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store
  window.merge = merge
  window.update = update
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
