import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from '@progress/kendo-react-layout';
import imgJson from './imagegallery';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const redirectToMemory = (id) => {
    navigate(`/memory/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imgJson.images.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => redirectToMemory(item.memoryId)}
          >
            <Card>
              <CardImage src={item.memoryImage} />
              <div className="p-4">
                <CardHeader>
                  <CardTitle>{item.memoryName}</CardTitle>
                  <CardSubtitle>{item.memoryDate}</CardSubtitle>
                </CardHeader>
                <CardBody>
                  <p className="text-sm text-gray-700">{item.memoryDescription}</p>
                  <p className="text-sm font-semibold text-gray-800"><strong>Location:</strong> {item.memoryLocation}</p>
                </CardBody>
                <CardActions>
                  <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">Open Memory</button>
                </CardActions>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
