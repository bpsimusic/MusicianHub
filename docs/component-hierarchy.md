App
  Header Component
    NavBar Component
      SignUp Component
      LogIn Component
    SearchBarContainer
    -SearchBar

  IndexSongsContainer
  -IndexSongs Component
    -IndexItemSong Component

  SignUp Component
    -SignUp Element Component
      -SignUp Form Component


  Artist Info Container
    -Artist Info Component
      -Song Index Container
        -Song Index
          -Song IndexItem
          -Upload Component

  FooterContainer
  -Footer Component




  ROUTES
  Path                        Component
  "/"                         "App"
  "/signup"                   "SignUp Component"
  "/signup/artists"           "SignUp Component"
  "/signup/users"             "SignUp Component"
  "/artists/:artistname"      "Artist Info Component"
