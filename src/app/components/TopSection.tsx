import React from 'react'
import Navbar from './Navbar';
import "./style.css";
const TopSection = () => {
    return (
        <div className='bg-gif py-5'>
            <div className='container mx-auto flex flex-col gap-20'>
                <Navbar />
                <div className="w-full sm:w-3/4 ">
                    <h1 className="text-[#070D4A] font-roobert text-4xl sm:text-6xl font-medium leading-90 tracking-tight">Unleash your data, unchain your growth and unlock new opportunities</h1>
                </div>
            </div>
        </div>
    )
}

export default TopSection;
