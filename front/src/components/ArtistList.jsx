import React, { Component } from 'react';
import Artist from './Artist';

import './ArtistList.scss';

class ArtistList extends Component {
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
    const { artists } = this.state
    return (
      <div className="ArtistList">
        <div className="mainTitle">
          <h1>All yours favorites artists !</h1>
        </div>
        <div className="list">
          {artists.map(artist =>
            <Artist
              id={artist.id}
              artistPicture={artist.artist_picture} name={artist.name}  job={artist.job} description={artist.description}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ArtistList;