import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Gallery1 from '../img/Gallery1.png'
import Gallery2 from '../img/Gallery2.png'
import Gallery3 from '../img/Gallery3.png'
import Gallery4 from '../img/Gallery4.png'
import Gallery5 from '../img/Gallery5.png'
import Gallery6 from '../img/Gallery6.png'

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const galleryItems = [
        { id: 1, image: Gallery1 },
        { id: 2, image: Gallery2 },
        { id: 3, image: Gallery3 },
        { id: 4, image: Gallery4 },
        { id: 5, image: Gallery5 },
        { id: 6, image: Gallery6 },
    ]

    const openModal = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const nextImage = () => {
        setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const prevImage = () => {
        setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleImageClick = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        openModal(index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
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
                Gallery
            </motion.h2>

            <motion.div
                className="grid grid-cols-3 gap-6 w-3/4 mx-auto"
                variants={containerVariants}
            >
                {galleryItems.map((gallery, index) => (
                    <motion.div
                        key={gallery.id}
                        className="overflow-hidden cursor-pointer group rounded-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => handleImageClick(e, index)}
                    >
                        <img
                            src={gallery.image}
                            alt={`Gallery ${gallery.id}`}
                            className="w-full h-auto object-cover"
                        />

                        <motion.div
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
                            whileHover={{ opacity: 1 }}
                        >
                            <motion.svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ scale: 1.2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </motion.svg>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        onClick={handleBackdropClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="relative w-11/12 h-5/6 max-w-4xl"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={galleryItems[selectedIndex].image}
                                alt="Full view"
                                className="w-full h-full object-contain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                key={selectedIndex}
                            />

                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeModal();
                                }}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>

                            <motion.div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {selectedIndex + 1} / {galleryItems.length}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Gallery