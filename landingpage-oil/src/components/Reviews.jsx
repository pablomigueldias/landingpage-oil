import React, { useRef } from 'react'
import CarroselReviews from './CarroselReviews.jsx'

const Reviews = () => {
    const carroselRef = useRef(null);

    return (
        <div className='text-white py-20 w-full flex flex-col items-center justify-center'>
            <h2 className='text-5xl font-bold text-center mb-16'>Reviews</h2>
            <div className="w-3/4">
                <CarroselReviews ref={carroselRef} />
            </div>
            <div className="flex align-items justify-center gap-4 mt-10">
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
    )
}

export default Reviews