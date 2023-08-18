import React from 'react'
import ContactBtn from './ContactBtn'
import { FiArrowUpRight } from 'react-icons/fi'

const CombinatioSection = () => {
    return (
        <div className="combination-bg">
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

                <div className="bg-white mt-40 grid grid-cols-1  px-7 py-16 gap-8">
                    <div className="p-7">
                        <h1 className="text-5xl">Our pre-built solutions help you get off-the-ground quickly</h1>
                        <p>Solutions in the spaces of enterprise search, question-answering & analytics, customer data platforms, and customer experience, messaging and chatbots</p>
                    </div>
                    <div>
                        <h1>Our pre-built solutions help you get off-the-ground quickly</h1>
                        <p>Solutions in the spaces of enterprise search, question-answering & analytics, customer data platforms, and customer experience, messaging and chatbots</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CombinatioSection