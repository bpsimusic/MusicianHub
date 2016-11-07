
export const signup = (artist, success, error) => {
  $.ajax({url: "/api/artists",
  type: "post",
  data: artist,
  dataType: 'json',
  success,
  error
});
};

export const update = (artist, success, error) => {
  $.ajax({url: `/api/artists/${artist.id}`,
  type: "patch",
  data: artist,
  dataType: 'json',
  success,
  error
});
};

export const newSong = (song, success, error) => {
  
  $.ajax({url: `/api/artists/${song.artist_id}/songs`,
  type: "post",
  data: song,
  dataType: 'json',
  success,
  error
});
};




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
