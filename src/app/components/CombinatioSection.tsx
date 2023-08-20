"use client";
import React from 'react'
import ContactBtn from './ContactBtn'
import MySwiperComponent from './Slider'
import "./style.css";


const CombinatioSection = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-20 text-lg">
                <div className="">
                    <p className="text-base font-normal leading-6">OnebyZero empowers businesses with cutting-edge Data and AI solutions by delivering unparalleled value, innovation, and domain expertise. </p>
                </div>
                <div className="">
                    <p className="text-base font-normal leading-6">We blend strategy, technology, data powered insights and iterative decision optimization to take enterprises to infinity and beyond.</p>
                </div>
                <div className="">
                    <ol className="list-disc text-base font-normal leading-6">
                        <li>Deep expertise in Data Platforms, Machine Learning & Artificial Intelligence</li>
                        <li>
                            Cut through the Generative AI chatter and make it work for you</li>
                        <li>
                            Unique experimentation & exploitation philosophy
                        </li>
                    </ol>
                </div>
            </div>

            <div className="mt-40 grid grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-5xl">Unique combination of solutions & services in Generative AI, ML, Data & Customer Experience </h1>
                </div>
                <div className='col-span-3 pr-16 pt-6'>
                    <p>-- that can all some together to help you take advantage of your data and better engage with your customers</p>
                </div>
                <div className='col-span-3 pr-16 pt-6'>
                    <p>-- with a special focus in the Asia-Pacific region, supported by a super-talented local and global team</p>
                </div>

                <div className="pt-8 col-span-3">
                    <ContactBtn />
                </div>
            </div>

            <div className="bg-white mt-40 grid grid-cols-1 md:grid-cols-2 rounded-3xl text-xl px-7 py-16 gap-8">
                <div className="p-7">
                    <h1 className="text-4xl md:text-5xl">Our pre-built solutions help you get off-the-ground quickly</h1>
                    <p className="mt-10">Solutions in the spaces of enterprise search, question-answering & analytics, customer data platforms, and customer experience, messaging and chatbots</p>
                </div>
                <div className="">
                    <MySwiperComponent />
                </div>
            </div>

            <div className="bg-white mt-10 grid grid-cols-1 md:grid-cols-2 rounded-3xl text-xl px-7 py-16 gap-8">
                <div className="p-7">
                    <h1 className="text-4xl md:text-5xl">Our deep industry experience and technical expertise help drive measurable business outcomes</h1>
                    <p className="mt-10">We take a metrics-driven approach in all our consulting services engagements, across various kinds of AI, Data, Martech and Customer engagement projects</p>
                </div>
                <div className="">
                    <MySwiperComponent />
                </div>
            </div>
        </div>
    )
}

export default CombinatioSection