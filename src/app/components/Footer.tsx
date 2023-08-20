import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <div className="bg">
            <div className="container mx-auto pt-20 pb-5 px-10 text-white">
                <div className="grid grid-cols-4">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Solutions</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Hoots</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Kuwago</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Data wise</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Pique</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Services</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Generative AI</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Analytics & Machine Learning</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Data Platforms</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Customer Engagement</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">About</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Company</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Team</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Careers</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Contact</h1>
                        <ul className="text-lg font-medium ">
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Email</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Facebook</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Twitter</a>
                            </li>
                            <li>
                                <a className='opacity-50 hover:opacity-100' href="">Instagram</a>
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