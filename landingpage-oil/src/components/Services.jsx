import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Carrosel from './Carrosel.jsx';

const Services = () => {
    const carroselRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className='text-white py-12 md:py-20 w-full overflow-hidden'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2
                className='text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 px-4'
                variants={itemVariants}
            >
                Services.
            </motion.h2>

            <motion.div
                className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-7xl items-center mx-auto px-6 xl:px-0 w-full"
                variants={containerVariants}
            >
                <motion.div
                    className="w-full min-w-0 lg:flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
                    variants={containerVariants}
                >
                    <motion.h3
                        className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'
                        variants={itemVariants}
                    >
                        We have <span className='text-orange-600'>ALL</span> the necessary fuels
                    </motion.h3>

                    <motion.p
                        className='text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base wrap-break-word'
                        variants={itemVariants}
                    >
                        It's time to make Fuel stand out! Present the most important information about your brand and show what makes it truly unique.
                    </motion.p>

                    <motion.p
                        className='text-gray-400 mb-8 md:mb-12 leading-relaxed text-sm md:text-base wrap-break-word'
                        variants={itemVariants}
                    >
                        Make it clear what people can expect from Fuel and what value you bring to their lives.
                    </motion.p>

                    <motion.div
                        className="flex gap-4 w-full justify-center lg:justify-start"
                        variants={itemVariants}
                    >
                        <motion.button
                            onClick={() => carroselRef.current?.prev()}
                            className='flex-1 lg:flex-none border border-gray-600 hover:border-orange-600 text-white px-4 md:px-6 py-3 transition rounded-lg'
                            whileHover={{ scale: 1.05, borderColor: '#ff6f00' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← Left
                        </motion.button>
                        <motion.button
                            onClick={() => carroselRef.current?.next()}
                            className='flex-1 lg:flex-none border border-gray-600 hover:border-orange-600 text-white px-4 md:px-6 py-3 transition rounded-lg'
                            whileHover={{ scale: 1.05, borderColor: '#ff6f00' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Right →
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full min-w-0 lg:w-3/5 mt-10 lg:mt-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Carrosel ref={carroselRef} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;