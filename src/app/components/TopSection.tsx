import React from 'react'
import Navbar from './Navbar';
import "./style.css";
const TopSection = () => {
    return (
        <div className='bg-gif pt-5 pb-10'>
            <div className='container mx-auto flex flex-col gap-20'>
                <Navbar />
                <div className="w-full grid-cols-2">
                    <div>
                        <h1>Omni-channel communication with your customers at scale</h1>
                    </div>
                    <div>
                        <h1>slidfjlsidjfj</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;
