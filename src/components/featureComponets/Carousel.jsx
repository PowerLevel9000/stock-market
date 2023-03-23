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
    <CarouselWrapper className="carousel">
      <img src={images[currentIndex]} alt="carousel" />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 40vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Carousel;
