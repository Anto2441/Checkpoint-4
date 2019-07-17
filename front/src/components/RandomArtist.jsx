import React, { Component } from 'react';
import Artist from './Artist';

import './RandomArtist.scss';

class RandomArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/artists')
      .then(results => results.json())
      .then(data => {
        this.setState({
          artists: data,
        })
      });
  }

  render() {
    /* const random4 = this.state.albums.slice(2, 6);
    console.log(random4) */
    const { artists } = this.state;
    const random = artists.slice([Math.floor(Math.random()*artists.length)])
    console.log(random)
    return (
      <div className="RandomArtist">
        <h2>Your favorites artists !</h2>
        <hr />
        <p>RA-N-DO-M-LY&nbsp; &nbsp; &nbsp; &nbsp;G-ENE-RA-T-ED &nbsp;!</p>
        <div className="randomArtist">
          {random.map((artist, i) =>
            <Artist
              id={artist.id} 
              artistPicture={artist.artist_picture} 
              name={artist.name} 
              job={artist.job} 
              description={artist.description} 
              key={i}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RandomArtist;