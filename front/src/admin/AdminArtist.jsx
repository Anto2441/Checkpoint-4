import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AdminArtist.scss';

class AdminArtist extends Component {

  deleteArtist = () => {
    const { artist: { id } } = this.props;
    const config = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3000/api/artists/${id}`, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Artist deleted', 3000);
        } else {
          NotificationManager.error('', 'Error delete', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Error delete', 3000);
      });
  }

  render() {
    const {
      artist: {
        id, name, job, artist_picture, description,
      },
    } = this.props;
    console.log(this.props)
    return (
      <div className="AdminArtist">
        <div className="cardLeft">
          <img className="artistPicture" src={artist_picture} alt="artistPicture" />
        </div>
        <div className="cardRight">
          <h3 className="name">{name}</h3>
          <h4 className="job">{job}</h4>
          <h5 className="description">{description}</h5>
          <NavLink to={`/AdminUpdateArtist/${id}`}><button className="update"> Update </button></NavLink><br />
          <button className="delete" onClick={this.deleteArtist}> Delete </button>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default AdminArtist;