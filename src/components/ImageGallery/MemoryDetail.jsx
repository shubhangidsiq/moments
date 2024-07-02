import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImage } from '@progress/kendo-react-layout';
import MemoryData from './MemoryData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faExpand } from '@fortawesome/free-solid-svg-icons';

const MemoryDetail = () => {
  const { id } = useParams();
  const memory = MemoryData.images.find((memory) => memory.imageId === id);

  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let autoplayTimeout;
    if (isAutoplay) {
      autoplayTimeout = setTimeout(() => {
        setIsAutoplay(true);
      }, 700);
    }

    return () => clearTimeout(autoplayTimeout);
  }, [isAutoplay]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  if (!memory) {
    return <div>Memory not found for ID: {id}</div>;
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedImages(memory.images.map((_, index) => index));
    } else {
      setSelectedImages([]);
    }
  };

  const handleSelectImage = (index) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Detail for ID: {id}</h1>
      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            checked={selectedImages.length === memory.images.length}
            onChange={handleSelectAll}
          />
          <span className="ml-2">Select All</span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {memory.images.map((image, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden relative"
            onClick={() => openModal(index)}
          >
            <Card>
              <CardImage src={image} />
              <div className="p-3">
                <label
                  className="inline-flex items-center cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedImages.includes(index)}
                    onChange={() => handleSelectImage(index)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="ml-2">Select</span>
                </label>
              </div>
            </Card>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 ${isFullscreen ? 'z-50' : ''}`}>
          <div className="relative bg-white rounded-lg max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 bg-gray-300 rounded-full p-1 z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="absolute top-2 left-2 z-50">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className={`cursor-pointer text-2xl ${isAutoplay ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={toggleAutoplay}
              />
              <FontAwesomeIcon
                icon={faExpand}
                className="cursor-pointer text-2xl ml-2 text-gray-500"
                onClick={toggleFullscreen}
              />
            </div>
            <Carousel
              selectedItem={currentImageIndex}
              onChange={(index) => setCurrentImageIndex(index)}
              showThumbs={true}
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={isAutoplay}
              interval={2000}
            >
              {memory.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Memory ${index}`} />
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

