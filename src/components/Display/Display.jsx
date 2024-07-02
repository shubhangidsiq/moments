import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle } from '@progress/kendo-react-layout';
import { useNavigate } from 'react-router-dom';

const Display = ({ name, img, id, location, date, description }) => {
    const navigate = useNavigate();

    const redirectToMemory = (id) => {
        navigate(`/moments/${id}`);
    };

    return (
        <div className="border border-gray-300 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer" onClick={() => redirectToMemory(id)}>
            <Card>
                <CardImage src={img} />
                <div className="p-4">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                        <CardSubtitle className="text-sm text-gray-500">{date}</CardSubtitle>
                    </CardHeader>
                    <CardBody>
                        <p className="text-sm text-gray-700 mb-2">{description}</p>
                        <p className="text-sm font-semibold text-gray-800"><strong>Location:</strong> {location}</p>
                    </CardBody>
                    <CardActions>
                        <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">Open Memory</button>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
};

export default Display;
