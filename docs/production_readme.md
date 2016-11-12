# Musician Hub

[MusicianHub live][mh]
[mh]: https://musicianhub.herokuapp.com/#/

MusicianHub is a full-stack web application based off Bandcamp. It uses Ruby on Rails on the backend, PostgreSQL for the database, and React.js with a Redux framework for the frontend.

## Artist Profile Page and Editing

On successful signup, an artist is created in the database. New users will be led to their profile page, where they can add their name, profile image, and bio with the Edit button. These attributes will be added to the database when the user adds them.

![image of Edit Profile](/docs/wireframes/edit-profile.png)


## Artist Song Creation and Editing

Songs are handled in the songs table in the database, and each song belongs to a specific artist. Artists can upload mp3s to their profile page using the Cloudinary interface by clicking "upload song". After adding a song, an artist can edit his or her playlist by clicking Edit Songs.

Users can download songs from an artist playlist, as well as play them.

![image of Songs Index](/docs/wireframes/song-index.png)

## Cloudinary

All songs are stored in the Rails database using song_url, which points to Cloudinary where the song is actually stored. Images are stored in the same fashion.

## Search Bar

The search bar is the primary interface for finding music. Artists will be provided in a dropdown menu based on the user input.

![image of Search Bar](/docs/wireframes/search-bar.png)

## Song Player

When a song is played, it is played with the song player at the footer. Navigation to other pages will not interrupt the song: the song is stored in the Redux state.

## Spotify Seeding

The RSpotify ruby wrapper for the Spotify Web API was used. All artist profiles in the database are seeded with Spotify, using 30 second previews for the songs.

## Future Project Plans

I plan to create playlists for users, as well as the ability to queue songs in the song player.
