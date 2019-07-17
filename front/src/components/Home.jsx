import React from 'react';
import CarouselHome from './CarouselHome';
import RandomArtist from './RandomArtist';

import './Home.scss';

function Home() {
  return(
    <div className="Home">
      <h1 className="mainTitleHome">Wild Circus <span className="numberTitle">2.0</span></h1>
      <CarouselHome />
      <RandomArtist />
    </div>
  );
}

export default Home;