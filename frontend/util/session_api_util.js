


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



export const deleteSong = (song, success, error) => {
  $.ajax({url: `/api/artists/${song.artist_id}/songs/${song.id}`,
  type: "delete",
  dataType: 'json',
  success,
  error
});
};


export const editSong = (song, success, error) => {
  return $.ajax({url: `/api/artists/${song.artist_id}/songs/${song.song.id}`,
  type: "patch",
  data: song,
  success,
  error
});
};


export const signup = (artist) => {
  return $.ajax({url: "/api/artists",
  type: "post",
  data: artist,
  dataType: 'json'
});
};



export const login = (artist) => {
  return $.ajax({url: "/api/session",
  type: "post",
  data: artist,
  dataType: 'json'
});
}

export const logout = (success, error) => {

  $.ajax({url: "/api/session",
  type: "delete",
  dataType: 'json',
  success,
  error
})
}
