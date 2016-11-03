export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVECURRENTUSER";
export const RECEIVE_ERRORS = "RECEIVEERRORS";
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
