import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';
import './Carousel.css';

const data = [
  { image: img1 },
  { image: img2 },
  { image: img3 }
];

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100 h-auto mx-auto"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>IdeaStore</h3>
        <p className='par'>Store di Articoli da regalo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto mx-auto"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nuovo</h3>
          <p>Prodotti introvabili e curiosi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto mx-auto"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ti accende una lampadina!</h3>
          <p>Articoli da regalo introvabili e idee originali</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;


