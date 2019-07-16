import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


/* carousel's pictures */
const items = [
  {
    src: 'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/Bb9AZEUQikvBM6Xbrt2Bgd/ec2376f7-8c9f-4c73-9eb7-579a7a1730b8.jpg/r0_169_2172_1038_w1200_h678_fmax.jpg',
  },
  {
    src: 'https://media.lactualite.com/2019/05/lat03_cirque_hero-1200x480.jpg',
  },
  {
    src: 'https://latentationculturelle.files.wordpress.com/2018/02/thegreatestshowmancritique-1.jpg?w=1200',
  }
];

/* Implement carousel  */

class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="imageCarousel" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className="carousel">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default CarouselHome;