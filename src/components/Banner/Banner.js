import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item className="">
    <img
      className="d-block w-100 h-600"
      src="https://i.ibb.co/Df7qRBH/047a968b-b5c9-eb11-80dd-f8bc124783a3-width-1980.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src= "https://i.ibb.co/F4hNQ9M/c4889ae7-863c-ec11-b548-0025b513b100-width-1980.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/TWzF0tw/3955aed2-322b-ec11-b548-0025b513b100-width-1980.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    );
};

export default Banner;