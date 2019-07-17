import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AdminEvent.scss';

class AdminEvent extends Component {

  deleteEvent = () => {
    const { event: { id } } = this.props;
    const config = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3000/api/events/${id}`, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Event supprimé', 3000);
        } else {
          NotificationManager.error('', 'Error delete', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Error delete', 3000);
      });
  }
  render() {
    const {
      event: {
        id, name, city, year, event_picture
      },
    } = this.props;
    return (
      <div className="AdminEvent">
        <div className="cardLeft">
          <img className="eventPicture" src={event_picture} alt="eventPicture" />
        </div>
        <div className="cardRight">
          <h3>{name}</h3>
          <h4>{year}</h4>
          <h5>{city}</h5>
        <NavLink to={`/AdminUpdateEvent/${id}`}><button className="update"> Update </button></NavLink>
        <button className="delete" onClick={this.deleteEvent}> Delete </button>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default AdminEvent;