"use client";
import React from 'react'
import "./style.css";
import ContactBtn from './ContactBtn';
import Image from 'next/image';
import logo1 from "../public/image 142.png"
import logo2 from "../public/image 129.png"
import logo3 from "../public/image 131.png"
import logo4 from "../public/image 132.png"
import logo5 from "../public/image 136.png"
import logo6 from "../public/image 137.png"
import logo7 from "../public/image 140.png"
import logo8 from "../public/image 143.png"


const DetailSection = () => {

    return (
        <div>
            <div className="container mx-auto">
                <div className="px-10 py-20">
                    <h1 className="text-4xl md:text-5xl">Let’s talk about how we can supercharge your business.</h1>
                    <div className="mt-8">
                        <ContactBtn />
                    </div>
                </div>
            </div>
            <div className="container mx-auto overflow-x-auto">
                <div className="flex flex-row flex-wrap mt-8 justify-center items-center">



                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo1}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo2}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo3}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo4}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo5}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo6}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    <div className="w-32 m-4">
                        <div className="relative w-full h-auto overflow-hidden rounded-lg">
                            <Image
                                src={logo7}
                                width={500}
                                height={500}
                                alt="Brand Logo"
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 hover:filter-none hover:grayscale-0"
                            />

                        </div>
                    </div>

                    {/* Add more brand logos */}
                </div>
            </div>
        </div>
    )
}

export default DetailSection