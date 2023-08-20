import React from 'react'
import Navbar from './Navbar'
import "./style.css"

const HootsHeading = () => {
    return (
        <div className='bg-gif py-5'>
            <div className='container mx-auto flex flex-col gap-20'>
                <Navbar />
                <div className="w-full grid grid-cols-2">
                    <div>
                        <h1 className="text-[#070D4A] text-5xl">Omni-channel communication with your customers at scale</h1>
                    </div>
                    <div>
                        <h1>Omni-channel communication with your customers at scale</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HootsHeading