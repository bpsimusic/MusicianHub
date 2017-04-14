import React from 'react';
import {Link, withRouter} from 'react-router';


class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let that = this;
    let alphabet = [];
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    return(
    <div>
      <h1 className="artistIndexHeading">Artist Index</h1>
      <ul className="indexContainer">
        {alphabet.map(letter=>{
          return (<li className="letter" key={letter}>
            <br></br>
            {letter}
            <hr></hr>

            <ul className="letterSection">
              {that.props.artists.filter(function(artist){
                if (artist.name == null) return false;
                let firstLetter = artist.name[0];
                if (artist.name.slice(0, 4).toLowerCase() == 'the '){
                  firstLetter = artist.name.slice(4,5);
                }
                 return (firstLetter.toUpperCase() == letter);
              }).sort(function(a,b){
                let c = {name: a.name};
                let d = {name: b.name};
                if (a.name.slice(0, 4).toLowerCase() == 'the '){
                  c.name = a.name.slice(4);
                }
                if (b.name.slice(0, 4).toLowerCase() == 'the '){
                  d.name = b.name.slice(4);
                }
                if (c.name < d.name) return -1;
                if (c.name > d.name) return 1;
                if (c.name == d.name) return 0;
              }).map(function(artist){
                return <Link to={`/artists/${artist.id}`}
                         className="indexArtistLink">
                        {artist.name}</Link>;
              })}
            </ul>
          </li>);
        })}

        <li className="letter">
          <br></br>
          Other
          <hr></hr>
          <ul className="letterSection">
            {that.props.artists.filter(function(artist){
              if (artist.name == null) return false;
              let firstLetter = artist.name[0].toUpperCase();
              return (firstLetter > 91 ||
                    firstLetter < 65);
            }).sort(function(a,b){
              if (a.name<b.name) return -1;
              if (a.name>b.name) return 1;
            if (a.name==b.name) return 0;
          }).map(function(artist){
              return <Link to={`/artists/${artist.id}`}
                       className="indexArtistLink">
                      {artist.name}</Link>;
            })}
          </ul>
        </li>
      </ul>
    </div>
    );
  }
}

export default withRouter(Index);
