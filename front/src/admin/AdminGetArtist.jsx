import React, { Component } from 'react';
import AdminArtist from './AdminArtist'

import './AdminGetArtist.scss';

class AdminGetArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/artists`)
      .then(res => res.json())
      .then((artists) => {
        this.setState({ artists });
      });
  }

  render() {
    const { artists } = this.state;
    return (
      <div className="AdminGetArtist">
        <div className="titleAllArtists">
          <p>All artists</p>
        </div>
        <div className="list">
          {artists.map(artist => <AdminArtist artist={artist} key={artist.id} />)}
        </div>
      </div>
    );
  }
}

export default AdminGetArtist;