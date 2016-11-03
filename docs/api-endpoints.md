HTML API

Root
  - GET / - loads React web app

JSON API

Artists
  - GET /api/artists/:id
  - GET /api/artists/new
  - POST /api/artists/:id
  - PATCH /api/artists/:id

Songs
  - POST /api/artists/:artist_id/songs/:id
  - PATCH /api/artists/:artist_id/songs/:id  
  - DELETE /api/artists/:artist_id/songs/:id  

Session
  - POST /api/session
  - DELETE /api/session
  - GET /api/session
