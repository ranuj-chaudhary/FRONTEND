import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './ImageSlider.css';

const ImageSlider = ({ url, limit = 5, page = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchImages(getUrl) {
      setIsLoading(true);
      setError('');
      try {
        const res = await fetch(`${getUrl}?limit=${limit}&page=${page}`);

        if (!res.ok) {
          throw new Error('Error fetching images');
        }
        const data = await res.json();

        if (data && data.length > 0) {
          setImages(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (url) fetchImages(url);
  }, [url, limit, page]);

 
  function handleNextSlide() {
    setCurrentSlide((currentSlide) =>
      Math.min(currentSlide + 1, images.length - 1)
    );
  }
  function handlePrevSlide() {
    setCurrentSlide((currentSlide) => Math.max(0, currentSlide - 1));
  }

  function handleSetCurrentSlide(index) {
    setCurrentSlide(index);
  }

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading Images...</p>
      </div>
    );
  }
  if (error.length > 0) {
    return (
      <div className="loading">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="image-slider">
      {images && images.length > 0
        ? images.map((image, index) => (
            <img
              className={`image-slider__image ${
                currentSlide !== index ? 'hidden' : ''
              }`}
              key={image.id}
              src={`${image.download_url}`}
              alt=""
            />
          ))
        : null}
      <div className="image-slider__actions">
        <span className="image-slider__left-arrow" onClick={handlePrevSlide}>
          <AiOutlineArrowLeft />
        </span>
        <span className="image-slider__right-arrow" onClick={handleNextSlide}>
          <AiOutlineArrowRight />
        </span>
      </div>
      <div className="image-slider__pagination-dots">
        {images && images.length > 0
          ? images.map((image, index) => (
              <span
                key={image.id}
                className={`image-slider__dots ${
                  currentSlide === index ? 'active' : ''
                }`}
                onClick={(e) => handleSetCurrentSlide(index)}
              ></span>
            ))
          : null}
      </div>
    </div>
  );
};

export default ImageSlider;
