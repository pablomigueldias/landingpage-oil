import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CarroselReviews from './CarroselReviews.jsx';

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
            className='text-white py-12 md:py-20 w-full overflow-hidden flex flex-col items-center justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className='text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16'
                variants={itemVariants}
            >
                Reviews
            </motion.h2>

            <motion.div
                className="w-full px-4 md:px-0 md:w-3/4 min-w-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <CarroselReviews ref={carroselRef} />
            </motion.div>

            <motion.div
                className="flex items-center justify-center gap-4 mt-8 md:mt-10 w-full px-6 md:w-auto md:px-0"
                variants={itemVariants}
            >
                <motion.button
                    onClick={() => carroselRef.current?.prev()}
                    className='flex-1 md:flex-none border border-gray-600 hover:border-orange-600 text-white px-4 md:px-6 py-3 transition rounded-lg'
                    whileHover={{ scale: 1.05, borderColor: '#ff6f00' }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Left
                </motion.button>

                <motion.button
                    onClick={() => carroselRef.current?.next()}
                    className='flex-1 md:flex-none border border-gray-600 hover:border-orange-600 text-white px-4 md:px-6 py-3 transition rounded-lg'
                    whileHover={{ scale: 1.05, borderColor: '#ff6f00' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Right →
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Reviews;