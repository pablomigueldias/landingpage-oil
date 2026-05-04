import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from './img/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ['About', 'Services', 'Reviews', 'Contact'];

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    const containerVariants = {
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    return (
        <header className=" text-white sticky top-0 z-50 bg-image-hero">
            <div className="flex items-center justify-between px-10 py-4 max-w-7xl mx-auto">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={logo} alt="logo" className='w-20 h-20 cursor-pointer' />
                </motion.div>
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col gap-1.5"
                >
                    <motion.span
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                    <motion.span
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                    <motion.span
                        className="w-6 h-0.5 bg-white"
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    ></motion.span>
                </motion.button>

                <nav className="hidden lg:block">
                    <ul className='flex items-center gap-12 text-base font-medium'>
                        {menuItems.map((item) => (
                            <motion.li
                                key={item}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative py-2 text-white hover:border-b transition-colors duration-300"
                                >
                                    {item}
                                    <motion.span
                                        className="absolute left-0 bottom-0 h-0.5 bg-orange-600"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    ></motion.span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden border-t backdrop-blur-md"
                    >
                        <motion.nav
                            className="px-10 py-4"
                            variants={containerVariants}
                            initial="closed"
                            animate="open"
                        >
                            <motion.ul className='flex flex-col gap-3'>
                                {menuItems.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                    >
                                        <motion.a
                                            href={`#${item.toLowerCase()}`}
                                            className="block py-2 text-base hover:border-b transition-colors duration-300"
                                            onClick={() => setIsOpen(false)}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header