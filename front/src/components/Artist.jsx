import React from 'react';

import './Artist.scss';

const Artist = (props) => {
    return (
      <div className="Artist">
        <div className="cardLeft">
          <img className="artistPicture" src={props.artistPicture} alt="artistPicture" />
        </div>
        <div className="cardRight">
          <h3 className="name">{props.name}</h3>
          <h4 className="job">{props.job}</h4>
          <h5 className="description">"{props.description}"</h5>
        </div>
      </div>
    );
}

export default Artist;