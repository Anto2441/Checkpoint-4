import React, { Component } from 'react';
import Event from './Event';

import './EventList.scss';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/events')
      .then(results => results.json())
      .then(data => {
        this.setState({
          events: data,
        })
      });
  }

  render() {
    const { events } = this.state
    return (
      <div className="EventList">
        <div className="mainTitle">
          <h1>Tous les événements de votre cirque préféré ! </h1>
        </div>
        <div className="list">
          {events.map(event =>
            <Event
              id={event.id}
              eventPicture={event.event_picture} name={event.name}  city={event.city} year={event.year}
            />
          )}
        </div>
      </div>
    );
  }
}

export default EventList;