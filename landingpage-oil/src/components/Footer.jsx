import React from 'react'
import { motion } from 'framer-motion'
import logo from '../img/logo.png'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <motion.div
            className='text-white py-20 w-full flex items-center justify-around'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Logo */}
            <motion.div
                className="logo-footer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                <img src={logo} alt="Logo" className="w-32 cursor-pointer" />
            </motion.div>

            <motion.div
                className="navigation-description"
                variants={itemVariants}
            >
                <motion.h2
                    className='text-xl font-bold mb-4 text-orange-600'
                    whileHover={{ x: 5 }}
                >
                    Navigation
                </motion.h2>
                <motion.ul
                    className='flex flex-col gap-3'
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {['About', 'Services', 'Reviews', 'Contact'].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={listItemVariants}
                            whileHover={{ x: 10, color: '#ff6f00' }}
                            className='cursor-pointer transition-colors'
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div
                className="contact-description"
                variants={itemVariants}
            >
                <motion.h2
                    className='text-xl font-bold mb-4 text-orange-600'
                    whileHover={{ x: 5 }}
                >
                    Contact
                </motion.h2>
                <motion.ul
                    className='flex flex-col gap-3'
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        'contato@empresa.com',
                        '11 99999-9999',
                        'Rua Exemplo, 123',
                        'Santo André, SP - Brazil'
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={listItemVariants}
                            whileHover={{ x: 10, color: '#ff6f00' }}
                            className='cursor-pointer transition-colors'
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div
                className="social-media"
                variants={itemVariants}
            >
                <motion.h2
                    className='text-xl font-bold mb-4 text-orange-600'
                    whileHover={{ x: 5 }}
                >
                    Follow Us
                </motion.h2>
                <motion.ul
                    className='flex flex-col gap-3 w-24'
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { icon: FaInstagram, label: 'Instagram' },
                        { icon: FaFacebook, label: 'Facebook' },
                        { icon: FaYoutube, label: 'Youtube' },
                        { icon: FaLinkedin, label: 'LinkedIn' }
                    ].map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.li
                                key={index}
                                className='flex justify-between items-center cursor-pointer'
                                variants={listItemVariants}
                                whileHover={{ x: 10, color: '#ff6f00', scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon className='text-lg' />
                                </motion.div>
                                <span>{social.label}</span>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer