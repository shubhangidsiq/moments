import React from 'react';
import Display from '../components/Display/Display';
import Events from './GetAllEvents';

const GetAllEvents = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Events.images.map((item) => (
                    <Display
                        key={item.id}
                        name={item.name}
                        date={item.date}
                        location={item.location}
                        img={item.image}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default GetAllEvents;
