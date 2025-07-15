import React from 'react'
import Navbar from '../Components/Navbar';
import '../App.css';

const Guest = ({ children }) => {
    return (
        <div className="bg-white">
            <Navbar />
            {children}
        </div>
    );
}

export default Guest