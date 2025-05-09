import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageCarousel.scss";

// ImageCarousel component that displays a carousel of images with captions
const ImageCarousel: React.FC = () => {
  return (
    <section className="image-carousel-section">
      <Carousel
        className="image-carousel"
        interval={2500}
        pause={false}
        controls={false}
      >
        {/* First carousel item with an image and caption */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/pancake.png"
            alt="Delicious Pancake"
          />
          <Carousel.Caption>
            <h3>Sweet Moments, One Pancake at a Time</h3>
            <p>Indulge in our freshly baked pancakes, made with love.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second carousel item with an image and caption */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/cake.png"
            alt="Exquisite Cake"
          />
          <Carousel.Caption>
            <h3>Celebration Starts with a Slice</h3>
            <p>Delight in our handcrafted cakes, perfect for every occasion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third carousel item with an image and caption */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/croissant.png"
            alt="Tasty Croissant"
          />
          <Carousel.Caption>
            <h3>Freshly Baked</h3>
            <p>Enjoy the rich flavors of our homemade croissants.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
