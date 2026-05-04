import React, { useState } from 'react'

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

    return (
        <div className='text-white py-20'>
            <h2 className='text-5xl font-bold text-center mb-16'>Gallery</h2>

            <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto">
                {galleryItems.map((gallery, index) => (
                    <div
                        key={gallery.id}
                        className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 group rounded-lg"
                        onClick={(e) => handleImageClick(e, index)}
                    >
                        <img
                            src={gallery.image}
                            alt={`Gallery ${gallery.id}`}
                            className="w-full h-auto object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                >
                    <div className="relative w-11/12 h-5/6 max-w-4xl">
                        <img
                            src={galleryItems[selectedIndex].image}
                            alt="Full view"
                            className="w-full h-full object-contain"
                        />

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                            {selectedIndex + 1} / {galleryItems.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery