import React, { useState } from 'react'
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

    return (
        <div className=' py-20 px-10'>
            <h2 className='text-5xl font-bold text-center mb-16'>Any questions?</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">

                <div className="form-contact">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="w-full  border border-color-laranja p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            className="w-full border border-color-laranja p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                        />

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone"
                            required
                            className="w-full  border border-color-laranja p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            required
                            rows="5"
                            className="w-full border border-color-laranja p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>

                <div className="info-contact space-y-8">

                    <div className="border border-color-laranja  p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-orange-600 p-3 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Email</h3>
                        </div>
                        <p className="text-orange-600 font-semibold">contato@empresa.com</p>
                        <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
                    </div>

                    <div className="border border-color-laranja  p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-orange-600 p-3 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-1.27l-1.365-2.73a1 1 0 00.756-.502l4.493-1.498a1 1 0 00.684-.948V5a2 2 0 00-2-2h-7.753a2 2 0 00-2 2v13a2 2 0 002 2h7.753a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Phone</h3>
                        </div>
                        <p className="text-orange-600 font-semibold">(11) 99999-9999</p>
                        <p className="text-gray-400 text-sm mt-2">We respond within 24 hours</p>
                    </div>

                    <div className="border border-color-laranja  p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-orange-600 p-3 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Address</h3>
                        </div>
                        <p className="text-orange-600 font-semibold">Rua Exemplo, 123</p>
                        <p className="text-gray-400 text-sm mt-2">Santo André, SP - Brazil</p>
                    </div>
                </div>
            </div>
            <div className=' overflow-hidden h-96 w-2/3 border-2 border-orange-600 flex items-center justify-center mx-auto mt-16'>
                <MapContainer center={position} zoom={16} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            <div className='text-center'>
                                <p className='font-bold'>Sua Empresa</p>
                                <p className='text-sm'>Santo André, SP</p>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact