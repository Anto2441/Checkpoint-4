import React, { Component } from 'react';
import AdminEvent from './AdminEvent'

import './AdminGetEvent.scss';

class AdminGetEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/events`)
      .then(res => res.json())
      .then((events) => {
        this.setState({ events });
      });
  }


  render() {
    const { events } = this.state;
    return (
      <div className="AdminGetEvent">
        <div className="titleAllEvents">
          <p>All Events</p>
        </div>
        <div className="list">
          {events.map(event => <AdminEvent event={event} key={event.id} />)}
        </div>
      </div>
    );
  }
}

export default AdminGetEvent;