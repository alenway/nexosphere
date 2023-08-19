"use client";
import Link from 'next/link';
import { Menu, X } from "lucide-react"
import ContactBtn from './ContactBtn'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="flex gap-2 px-3">
            <button className="bg-white p-1 rounded-xl text-[#7E7E7E] border border-[#D2D2D2] flex px-2 text-sm shadow-md backdrop-blur-md backdrop-filter justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <circle cx="10" cy="2" r="2" fill="#FF824D" />
                    <circle cx="5" cy="6" r="2" fill="#FF824D" />
                    <circle cx="10" cy="13" r="1.75" stroke="#FF824D" stroke-width="0.5" />
                </svg>
                ONEBYZERO</button>

            <nav className="bg-white w-full p-2 pl-8 rounded-xl text-[#7E7E7E] border border-[#D2D2D2] flex  justify-between items-center text-13 shadow-md backdrop-blur-md backdrop-filter sticky top-0 z-[20] mx-auto ">

                <ul className="sm:flex hidden text-black uppercase gap-3 font-roobert font-light leading-13 text-sm tracking-tight">
                    <li className="cursor-pointer py-1">
                        <Link href="/">Services</Link>
                    </li>
                    <li className="cursor-pointer py-1">
                        <Link href="/">Solutions</Link>
                    </li>
                    <li className="cursor-pointer py-1">
                        <Link href="/">CUSTOMERS</Link>
                    </li>
                    <li className="cursor-pointer py-1">
                        <Link href="/">About</Link>
                    </li>
                </ul>
                <div className="sm:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div>
                    {isOpen && (
                        <ul className="flex flex-col text-black uppercase gap-3 font-roobert font-light leading-13 text-sm tracking-tight">
                            <li className="cursor-pointer py-1">
                                <Link href="/">Services</Link>
                            </li>
                            <li className="cursor-pointer py-1">
                                <Link href="/">Solutions</Link>
                            </li>
                            <li className="cursor-pointer py-1">
                                <Link href="/">CUSTOMERS</Link>
                            </li>
                            <li className="cursor-pointer py-1">
                                <Link href="/">About</Link>
                            </li>
                        </ul>
                    )}
                </div>

                <ContactBtn />
            </nav>
        </div>
    )
}

export default Navbar