import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 3;
        const increment = end / (duration * 60);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end]);

    return <>{count}{suffix}</>;
};

const PrincipalSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const stats = [
        { end: 20, suffix: '+', label: 'Years of Experience' },
        { end: 473, suffix: '+', label: 'Clients Served' },
        { end: 24, suffix: '/7', label: 'Support Available' },
    ];

    return (
        <motion.div
            className="w-full flex flex-col lg:flex-row justify-between lg:justify-around pt-12 lg:pt-16 px-6 lg:px-0 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.div className='container-subtitle h-min w-full max-w-2xl lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0'>
                <motion.div
                    className="subtitle text-sm md:text-xl w-max text-white border border-color-laranja p-2 bg-color-laranja-60"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>TRUSTED FULL PARTNER</p>
                </motion.div>

                <motion.h1
                    className='text-5xl md:text-6xl lg:text-7xl mt-4 text-black font-bold leading-tight'
                    variants={itemVariants}
                >
                    Leader in fuel wholesale
                </motion.h1>

                <motion.div
                    className="paragrafo w-full md:w-9/12 mt-5 text-sm md:text-base text-white"
                    variants={itemVariants}
                >
                    <p>Delivering premium quality fuels across the nation. Your reliable partner in energy supply for over 20 years.</p>
                </motion.div>

                <motion.div
                    className="buttom flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 md:mt-9"
                    variants={itemVariants}
                >
                    <motion.button
                        className='bg-color-laranja text-white px-6 py-3 rounded-lg font-semibold cursor-pointer w-full sm:w-auto text-center'
                        whileHover={{ scale: 1.05, backgroundColor: '#ff6f00' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Us
                    </motion.button>

                    <motion.button
                        className='border-2 border-white text-white px-6 py-3 rounded-lg font-semibold cursor-pointer bg-transparent w-full sm:w-auto text-center'
                        whileHover={{ scale: 1.05, borderColor: '#ff6f00', color: '#ff6f00', backgroundColor: 'rgba(255, 111, 0, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Our Services
                    </motion.button>
                </motion.div>

                <motion.div
                    className="separacao border-b border-b-white mt-10 md:mt-14 mb-7 w-full md:w-4/5"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                ></motion.div>

                <motion.div
                    className="container-time-services flex flex-wrap gap-6 md:gap-10"
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item flex-1 min-w-30"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.h2
                                className='text-3xl md:text-4xl font-bold mb-1 text-white'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <Counter end={stat.end} suffix={stat.suffix} />
                            </motion.h2>
                            <p className='text-white text-xs md:text-sm'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="espacamento hidden lg:block w-1/3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            ></motion.div>
        </motion.div>
    );
};

export default PrincipalSection;