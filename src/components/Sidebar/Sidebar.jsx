import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-black text-white w-64 min-h-screen flex flex-col p-4">
            <Link to="/" className="text-2xl font-bold mb-6">Moments</Link>
            <Link to="/dashboard" className="py-2 px-4 hover:bg-gray-700 rounded">Dashboard</Link>
            <Link to="/events" className="py-2 px-4 hover:bg-gray-700 rounded">Events</Link>
            <Link to="/clients" className="py-2 px-4 hover:bg-gray-700 rounded">Clients</Link>
            <Link to="/moments" className="py-2 px-4 hover:bg-gray-700 rounded">Moments</Link>
            <Link to="/about" className="py-2 px-4 hover:bg-gray-700 rounded">About</Link>
            <Link to="/contact" className="py-2 px-4 hover:bg-gray-700 rounded">Contact</Link>
        </div>
    );
};

export default Sidebar;
