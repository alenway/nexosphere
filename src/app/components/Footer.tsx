import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <div className="bg text-white py-10 mt-10">
            <div className="mx-auto">
                <h1 className="mb-5">Enterprise AI. Redefined.</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-6 gap-5">
                    <div className="bg-white rounded-xl text-black p-10 py-20">
                        <h1 className="text-2xl">Deploy Generative AI applications that provide immediate value</h1>
                        <p className="text-lg mt-8 font-normal">OneByZero has significant experience in exploiting generative AI for enterprise search, natural language queries, question-answering, summarization, personalization, content generation and chatbot use-cases.</p>
                    </div>

                    <div className="bg-white rounded-xl text-black p-10 py-20">
                        <h1 className="text-2xl">Lay a modern data foundation to power AI/ML use-cases</h1>
                        <p className="text-lg mt-8 font-normal">OneByZero has significant experience in exploiting generative AI for enterprise search, natural language queries, question-answering, summarization, personalization, content generation and chatbot use-cases.</p>
                    </div>

                    <div className="bg-white rounded-xl text-black px-10 py-20">
                        <h1 className="text-2xl">Enhance customer experience across all channels</h1>
                        <p className="text-lg mt-8 font-normal">OneByZero has significant experience in exploiting generative AI for enterprise search, natural language queries, question-answering, summarization, personalization, content generation and chatbot use-cases.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer