import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useSelector((store) => store.imgReducer.imgData);
  console.log(images);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, 3000]);
  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <button type="button" onClick={handlePrevClick}>Prev</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button type="button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
