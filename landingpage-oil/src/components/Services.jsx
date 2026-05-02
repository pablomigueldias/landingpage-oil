import React, { useRef } from 'react'
import Carrosel from './Carrosel.jsx'

const Services = () => {
    const carroselRef = useRef(null);

    return (
        <div className=' text-white py-20'>
            <h2 className='text-5xl font-bold text-center mb-16'>Services.</h2>

            <div className="flex gap-20 max-w-7xl items-center">

                <div className="flex-1 flex flex-col justify-center">
                    <h3 className='text-3xl font-bold mb-6'>
                        We have <span className='text-orange-600'>ALL</span> the necessary fuels
                    </h3>

                    <p className='text-gray-400 mb-6 leading-relaxed'>
                        It's time to make Fuel stand out! Present the most important information about your brand and show what makes it truly unique.
                    </p>

                    <p className='text-gray-400 mb-12 leading-relaxed'>
                        Make it clear what people can expect from Fuel and what value you bring to their lives.
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={() => carroselRef.current?.prev()}
                            className='border border-gray-600 hover:border-orange-600 text-white px-6 py-3 transition'
                        >
                            ← Left
                        </button>
                        <button
                            onClick={() => carroselRef.current?.next()}
                            className='border border-gray-600 hover:border-orange-600 text-white px-6 py-3 transition'
                        >
                            Right →
                        </button>
                    </div>
                </div>

                <div className="w-3/5">
                    <Carrosel ref={carroselRef} />
                </div>
            </div>
        </div>
    )
}

export default Services