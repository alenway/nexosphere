import React from 'react'
import Link from 'next/link'
import "./style.css"

const Footer = () => {
    return (
        <div className="bg">
            <div className="container mx-auto pt-20 pb-5 px-10 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Solutions</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="/hoots">Hoots</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Kuwago</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Data wise</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Pique</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Services</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Generative AI</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Analytics & Machine Learning</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Data Platforms</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Customer Engagement</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-6 md:mt-0">
                        <h1 className="text-lg font-medium">About</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Company</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Team</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Careers</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-6 md:mt-0">
                        <h1 className="text-lg font-medium">Contact</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Email</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Facebook</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Twitter</Link>
                            </li>
                            <li>
                                <Link className='opacity-50 hover:opacity-100' href="">Instagram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <span className="opacity-50 hover:opacity-100">© OneByZero Pte. 2023</span>
                </div>
            </div>
        </div>
    )
}

export default Footer