import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

const Navbar = () => {
    return (
        <div className="flex gap-2">
            <button className="bg-white p-1 rounded-xl text-[#7E7E7E] border border-[#D2D2D2] flex px-2 text-sm shadow-md backdrop-blur-md backdrop-filter  items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <circle cx="10" cy="2" r="2" fill="#FF824D" />
                    <circle cx="5" cy="6" r="2" fill="#FF824D" />
                    <circle cx="10" cy="13" r="1.75" stroke="#FF824D" stroke-width="0.5" />
                </svg>
                ONEBYZERO</button>

            <div className="bg-white w-full p-2 pl-8 rounded-xl text-[#7E7E7E] border border-[#D2D2D2] flex items-center text-13 shadow-md justify-between backdrop-blur-md backdrop-filter">

                <ul className="flex text-black uppercase gap-3 font-roobert font-light leading-13 text-sm tracking-tight">
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Solutions</li>
                    <li className="cursor-pointer">CUSTOMERS</li>
                    <li className="cursor-pointer">About</li>
                </ul>
                <button className="flex text-slate-900 items-center rounded-lg p-1 shadow border border-gray-100">Contact Sales <FiArrowUpRight />
                </button>
            </div>
        </div>
    )
}

export default Navbar