import React from 'react'
import Navbar from './Navbar';
import "./TopSection.css";
const TopSection = () => {
    return (
        <div className='bg pt-2 pb-6'>
            <div className='container mx-auto flex flex-col gap-20'>
                <Navbar />
                <div className="w-full sm:w-3/4 ">
                    <h1 className="text-[#070D4A] font-roobert text-6xl font-medium leading-90 tracking-tight">Unleash your data, unchain your growth and unlock new opportunities</h1>
                </div>
            </div>
        </div>
    )
}

export default TopSection