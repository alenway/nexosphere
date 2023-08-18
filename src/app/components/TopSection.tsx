import React from 'react'
import Navbar from './Navbar';
import "./TopSection.css";
const TopSection = () => {
    return (
        <div className='bg h-72 py-3'>
            <div className='container mx-auto'>
                <Navbar />
            </div>
        </div>
    )
}

export default TopSection