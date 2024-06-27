import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImage } from '@progress/kendo-react-layout';
import MemoryData from './MemoryData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MemoryDetail = () => {
  const { id } = useParams();

  const memory = MemoryData.images.find((memory) => memory.imageId === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  if (!memory) {
    return <div>Memory not found for ID: {id}</div>;
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseCarousel = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Detail for ID: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {memory.images.map((image, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden relative cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Card>
              <CardImage src={image} />
              <div className="p-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedImageIndex === index}
                    readOnly
                  />
                  <span className="ml-2">Selected</span>
                </label>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2 z-10 text-gray-700 hover:text-gray-900" onClick={handleCloseCarousel}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Carousel
              showArrows
              selectedItem={selectedImageIndex}
              showStatus={false}
              showThumbs
              thumbWidth={100}
              thumbHeight={70}
              infiniteLoop
              centerMode
              centerSlidePercentage={60}
              className="carousel-medium"
            >
              {memory.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Memory ${id}`} className="mx-auto" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryDetail;
