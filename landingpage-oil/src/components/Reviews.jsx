import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CarroselReviews from './CarroselReviews.jsx'

const Reviews = () => {
    const carroselRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <motion.div
            className='text-white py-20 w-full flex flex-col items-center justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h2
                className='text-5xl font-bold text-center mb-16'
                variants={itemVariants}
            >
                Reviews
            </motion.h2>

            <motion.div
                className="w-3/4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <CarroselReviews ref={carroselRef} />
            </motion.div>

            <motion.div
                className="flex align-items justify-center gap-4 mt-10"
                variants={itemVariants}
            >
                <motion.button
                    onClick={() => carroselRef.current?.prev()}
                    className='border border-gray-600 hover:border-orange-600 text-white px-6 py-3 transition rounded-lg'
                    whileHover={{
                        scale: 1.05,
                        borderColor: '#ff6f00'
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Left
                </motion.button>

                <motion.button
                    onClick={() => carroselRef.current?.next()}
                    className='border border-gray-600 hover:border-orange-600 text-white px-6 py-3 transition rounded-lg'
                    whileHover={{
                        scale: 1.05,
                        borderColor: '#ff6f00'
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Right →
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Reviews