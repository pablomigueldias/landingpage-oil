import React from 'react'
import { motion } from 'framer-motion'

const PrincipalSection = () => {
    const Counter = ({ end, suffix }) => {
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    const stats = [
        { end: 20, suffix: '+', label: 'Years of Experience' },
        { end: 473, suffix: '+', label: 'Clients Served' },
        { end: 24, suffix: '/7', label: 'Support Available' },
    ];

    return (
        <motion.div
            className="container-main-sub flex justify-around pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className='container-subtitle h-min w-2xl'>
                <motion.div
                    className="subtitle text-xl w-max text-white border border-color-laranja p-2 bg-color-laranja-60"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>TRUSTED FULL PARTNER</p>
                </motion.div>

                <motion.h1
                    className='text-7xl mt-3 text-black font-bold'
                    variants={itemVariants}
                >
                    Leader in fuel wholesale
                </motion.h1>

                <motion.div
                    className="paragrafo w-9/12 mt-5 text-base text-white"
                    variants={itemVariants}
                >
                    <p>Delivering premium quality fuels across the nation. Your reliable partner in energy supply for over 20 years</p>
                </motion.div>

                <motion.div
                    className="buttom flex gap-5 mt-9"
                    variants={itemVariants}
                >
                    <motion.button
                        className='bg-color-laranja text-white px-6 py-3 mt-5 rounded-lg font-semibold cursor-pointer'
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: '#ff6f00'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Contact Us
                    </motion.button>

                    <motion.button
                        className='border-2 border-white text-white px-6 py-3 mt-5 rounded-lg font-semibold cursor-pointer bg-transparent'
                        whileHover={{
                            scale: 1.05,
                            borderColor: '#ff6f00',
                            color: '#ff6f00',
                            backgroundColor: 'rgba(255, 111, 0, 0.1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Our Services
                    </motion.button>
                </motion.div>

                <motion.div
                    className="separacao border-b border-b-white mt-14 mb-7 w-4/5"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                ></motion.div>

                <motion.div
                    className="container-time-services flex gap-10"
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <motion.h2
                                className='text-4xl font-bold mb-1 text-white'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <Counter end={stat.end} suffix={stat.suffix} />
                            </motion.h2>
                            <p className='text-white text-sm'>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="espacamento"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            ></motion.div>
        </motion.div>
    )
}

export default PrincipalSection