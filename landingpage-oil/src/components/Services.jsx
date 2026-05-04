import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Carrosel from './Carrosel.jsx'

const Services = () => {
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
            className='text-white py-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h2
                className='text-5xl font-bold text-center mb-16'
                variants={itemVariants}
            >
                Services.
            </motion.h2>

            <motion.div
                className="flex gap-20 max-w-7xl items-center mx-auto"
                variants={containerVariants}
            >
                <motion.div
                    className="flex-1 flex flex-col justify-center"
                    variants={containerVariants}
                >
                    <motion.h3
                        className='text-3xl font-bold mb-6'
                        variants={itemVariants}
                    >
                        We have <span className='text-orange-600'>ALL</span> the necessary fuels
                    </motion.h3>

                    <motion.p
                        className='text-gray-400 mb-6 leading-relaxed'
                        variants={itemVariants}
                    >
                        It's time to make Fuel stand out! Present the most important information about your brand and show what makes it truly unique.
                    </motion.p>

                    <motion.p
                        className='text-gray-400 mb-12 leading-relaxed'
                        variants={itemVariants}
                    >
                        Make it clear what people can expect from Fuel and what value you bring to their lives.
                    </motion.p>

                    <motion.div
                        className="flex gap-4"
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

                <motion.div
                    className="w-3/5"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Carrosel ref={carroselRef} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services