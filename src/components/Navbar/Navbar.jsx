import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Moments</Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                    <Link to="/events" className="hover:underline">Events</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
                <div className="md:hidden">
                    {/* Add a mobile menu button here */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
