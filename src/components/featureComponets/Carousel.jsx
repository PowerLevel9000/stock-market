import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useSelector((store) => store.imgReducer.imgData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  return (
    <CarouselWrapper data-testid="carousel" className="carousel">
      <div className="banner">
        <div>
          <h1 title="App Teaser">
            Stock Market
            <br />
            The Game Changer
          </h1>
          <hr />
          <p title="Suggestion Hero">Watch, analysis and Pick wisely </p>
        </div>
      </div>
      <img title="Carousel Image" src={images[currentIndex]} alt="carousel" />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 40vh;
  backdrop-filter: blur(5px);
  .banner {
    font-size: 1rem;
    position: absolute;
    text-align: center;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(234, 76, 137, 50%);
    p {
      color: wheat;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Carousel;
