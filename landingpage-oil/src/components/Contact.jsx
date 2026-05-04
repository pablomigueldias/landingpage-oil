import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulário enviado:', formData);
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const position = [-23.6628, -46.5629];

    const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

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

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className='py-12 lg:py-20 px-6 lg:px-10 w-full overflow-hidden'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2

                className='text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-16 text-black pt-20 md:pt-10'
                variants={itemVariants}
                viewport={{ once: true, margin: "-50px" }}
            >
                Any questions?
            </motion.h2>

            <motion.div
                className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
                variants={containerVariants}
            >
                <motion.div className="form-contact w-full" variants={containerVariants}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            variants={inputVariants}
                            className="w-full border border-orange-600/50 p-3 text-white bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-600 transition rounded-lg"
                            whileFocus={{ borderColor: '#ff6f00', boxShadow: '0 0 0 2px rgba(255, 111, 0, 0.1)' }}
                        />

                        <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            variants={inputVariants}
                            className="w-full border border-orange-600/50 p-3 text-white bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-600 transition rounded-lg"
                            whileFocus={{ borderColor: '#ff6f00', boxShadow: '0 0 0 2px rgba(255, 111, 0, 0.1)' }}
                        />

                        <motion.input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone"
                            required
                            variants={inputVariants}
                            className="w-full border border-orange-600/50 p-3 text-white bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-600 transition rounded-lg"
                            whileFocus={{ borderColor: '#ff6f00', boxShadow: '0 0 0 2px rgba(255, 111, 0, 0.1)' }}
                        />

                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            required
                            rows="5"
                            variants={inputVariants}
                            className="w-full border border-orange-600/50 p-3 text-white bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-600 transition resize-none rounded-lg"
                            whileFocus={{ borderColor: '#ff6f00', boxShadow: '0 0 0 2px rgba(255, 111, 0, 0.1)' }}
                        ></motion.textarea>

                        <motion.button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 transition rounded-lg"
                            variants={inputVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div className="info-contact space-y-6 lg:space-y-8 w-full" variants={containerVariants}>
                    <motion.div
                        className="border border-orange-600/50 p-6 rounded-lg hover:border-orange-600 transition"
                        variants={cardVariants}
                        whileHover={{ y: -5, borderColor: '#ff6f00' }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <motion.div className="bg-orange-600 p-3 rounded-full" whileHover={{ scale: 1.1 }}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-xl font-bold text-white">Email</h3>
                        </div>
                        <p className="text-orange-600 font-semibold wrap-break-word">contato@empresa.com</p>
                        <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
                    </motion.div>

                    <motion.div
                        className="border border-orange-600/50 p-6 rounded-lg hover:border-orange-600 transition"
                        variants={cardVariants}
                        whileHover={{ y: -5, borderColor: '#ff6f00' }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <motion.div className="bg-orange-600 p-3 rounded-full" whileHover={{ scale: 1.1 }}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-1.27l-1.365-2.73a1 1 0 00.756-.502l4.493-1.498a1 1 0 00.684-.948V5a2 2 0 00-2-2h-7.753a2 2 0 00-2 2v13a2 2 0 002 2h7.753a2 2 0 002-2v-7" />
                                </svg>
                            </motion.div>
                            <h3 className="text-xl font-bold text-white">Phone</h3>
                        </div>
                        <p className="text-orange-600 font-semibold">(11) 99999-9999</p>
                        <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
                    </motion.div>

                    <motion.div
                        className="border border-orange-600/50 p-6 rounded-lg hover:border-orange-600 transition"
                        variants={cardVariants}
                        whileHover={{ y: -5, borderColor: '#ff6f00' }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <motion.div className="bg-orange-600 p-3 rounded-full" whileHover={{ scale: 1.1 }}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </motion.div>
                            <h3 className="text-xl font-bold text-white">Address</h3>
                        </div>
                        <p className="text-orange-600 font-semibold wrap-break-word">Rua Exemplo, 123</p>
                        <p className="text-gray-400 text-sm mt-2">Santo André, SP - Brazil</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className='overflow-hidden h-72 md:h-96 w-full max-w-6xl mx-auto border-2 border-orange-600 flex items-center justify-center mt-12 lg:mt-16 rounded-lg'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="w-full h-full relative z-0">
                    <MapContainer center={position} zoom={16} style={{ height: "100%", width: "100%", zIndex: 0 }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>
                                <div className='text-center text-black'>
                                    <p className='font-bold'>Sua Empresa</p>
                                    <p className='text-sm'>Santo André, SP</p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;