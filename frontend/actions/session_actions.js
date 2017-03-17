import * as APIUtil from "../util/session_api_util";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const UPDATE = "UPDATE";
export const NEW_SONG = "NEW_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const RECEIVE_DELETE_SONG = "RECEIVE_DELETE_SONG";
export const RECEIVE_CURRENT_USER = "RECEIVECURRENTUSER";
export const RECEIVE_ERRORS = "RECEIVEERRORS";
export const RECEIVE_SONG_ERRORS = "RECEIVESONGERRORS";
export const RECEIVE_NEW_SONG = "RECEIVENEWSONG";
export const CLEAR_ERRORS = "CLEARERRORS";


export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(artist => dispatch(receiveCurrentUser(artist)),
      err => dispatch(receiveErrors(err.responseJSON)));
};


export const demologin = (user) => dispatch => {
  return APIUtil.login(user)
    .then(artist => dispatch(receiveCurrentUser(artist)));
};


export const logout = () => ({
  type: LOGOUT
})

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const logoutUser = () => ({
  type: LOGOUT
})

export const updateUser = (artist) => ({
  type: UPDATE,
  artist
})

export const receiveNewSong = (song) => ({
  type: RECEIVE_NEW_SONG,
  song
})
export const createNewSong = (song) => ({
  type: NEW_SONG,
  song
})

export const receiveSongErrors = (errors) => ({
  type: RECEIVE_SONG_ERRORS,
  errors
})

export const deleteSong = (song) => ({
  type: DELETE_SONG,
  song
})

export const receiveDelete = (song) => ({
  type: RECEIVE_DELETE_SONG,
  song
});
