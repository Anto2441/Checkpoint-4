import React from 'react';

import './Event.scss';

const Event = (props) => {
    return (
      <div className="Event">
        <div className="cardLeft">
          <img className="eventPicture" src={props.eventPicture} alt="eventPicture" />
        </div>
        <div className="cardRight">
          <h3 className="name">{props.name}</h3>
          <h4 className="city">{props.city}</h4>
          <h5 className="year">{props.year}</h5>
        </div>
      </div>
    );
}

export default Event;