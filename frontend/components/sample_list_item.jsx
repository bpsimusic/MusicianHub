import React from 'react';
import {Link} from 'react-router';

export const SampleListItem = ({artist}) =>{
  return (
    <li className={"sample-artist"}>
      <img src={artist.image}
           className={"sample-artist-image"}></img>
         <br></br>
      <Link to={`/artists/${artist.id}`}>{artist.name}</Link>

    </li>
  );
}
