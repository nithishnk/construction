import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import paint  from '../../images/1.jpg';
import wallpaint from '../../images/2.jpg';
import wallpaper from '../../images/3.jpg';
import './Box2.css';
export default class Box1 extends Component {
  render() {
    return (
      <div className="renovationCarousel">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={paint}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wallpaint}
            alt="Third slide"
          />
          
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wallpaper}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}
