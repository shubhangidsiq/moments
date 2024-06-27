import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardImage } from '@progress/kendo-react-layout';
import MemoryData from './MemoryData';

const MemoryDetail = () => {
  const { id } = useParams();
  const memory = MemoryData.images.find((memory) => memory.imageId === id);

  const [selectedImages, setSelectedImages] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Detail for ID: {id}</h1>
      <div className="mb-4">
        <label className="inline-flex items-center">
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
          >
            <Card>
              <CardImage src={image} />
              <div className="p-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={selectedImages.includes(index)}
                    onChange={() => handleSelectImage(index)}
                  />
                  <span className="ml-2">Select</span>
                </label>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryDetail;
