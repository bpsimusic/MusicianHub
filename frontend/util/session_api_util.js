
export const signup = (artist, success, error) => {
  $.ajax({url: "/api/artists",
  type: "post",
  data: artist,
  dataType: 'json',
  success,
  error
})
}

export const login = (artist, success, error) => {
  $.ajax({url: "/api/session",
  type: "post",
  data: artist,
  dataType: 'json',
  success,
  error
})
}

export const logout = (success, error) => {

  $.ajax({url: "/api/session",
  type: "delete",
  dataType: 'json',
  success,
  error
})
}
