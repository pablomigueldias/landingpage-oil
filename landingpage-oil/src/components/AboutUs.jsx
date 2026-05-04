import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../img/example-about1.png'
import image2 from '../img/example-about2.png'
import image3 from '../img/example-about-3.png'

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <motion.div
            className='container-aboutus flex flex-col md:flex-row justify-around items-center gap-4 md:gap-8 mt-6 md:mt-11 mb-6 md:mb-11 px-4 md:px-10 py-8 md:py-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div
                className="images-about grid grid-cols-2 w-full md:w-1/2 gap-2 md:gap-3"
                variants={containerVariants}
            >
                <motion.div
                    className="overflow-hidden flex flex-col gap-2 md:gap-3"
                    variants={containerVariants}
                >
                    <motion.div
                        className="overflow-hidden rounded-lg"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={image1}
                            alt="About Us 1"
                            className='w-full h-full object-cover hover:brightness-110 transition-all duration-300'
                        />
                    </motion.div>

                    <motion.div
                        className="overflow-hidden rounded-lg"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={image2}
                            alt="About Us 2"
                            className='w-full h-full object-cover hover:brightness-110 transition-all duration-300'
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="overflow-hidden rounded-lg h-full"
                    variants={imageVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={image3}
                        alt="About Us 3"
                        className='h-full w-full object-cover hover:brightness-110 transition-all duration-300'
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="text-about w-full md:w-2/6"
                variants={containerVariants}
            >
                <motion.h1
                    className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5 md:mb-4 text-black'
                    variants={itemVariants}
                >
                    About Us
                </motion.h1>

                <motion.p
                    className='text-sm md:text-base lg:text-base text-black leading-relaxed text-justify'
                    variants={itemVariants}
                >
                    It's time to make Fuel stand out! Present the most important information about your brand and show what makes it truly unique. Make it clear what people can expect from Fuel and what value you bring to their lives. Whether it's energy, innovation, or attitude — now is the moment to let your Fuel speak for itself. It's time to make Fuel stand out!

                    Present the most important information about your brand and show what makes it truly unique.
                </motion.p>

                <motion.button
                    className='mt-4 md:mt-6 bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 text-sm md:text-base w-full md:w-auto'
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default AboutUs