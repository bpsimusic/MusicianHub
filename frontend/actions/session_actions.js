export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const UPDATE = "UPDATE";
export const NEW_SONG = "NEW_SONG";
export const RECEIVE_CURRENT_USER = "RECEIVECURRENTUSER";
export const RECEIVE_ERRORS = "RECEIVEERRORS";
export const RECEIVE_SONG_ERRORS = "RECEIVESONGERRORS";
export const RECEIVE_NEW_SONG = "RECEIVENEWSONG";
export const CLEAR_ERRORS = "CLEARERRORS";

export const login = (artist) => ({
  type: LOGIN,
  artist
})
export const logout = () => ({
  type: LOGOUT
})
export const signup = (artist) => ({
  type: SIGNUP,
  artist
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
