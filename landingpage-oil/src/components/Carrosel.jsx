import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Carrosel = forwardRef((props, ref) => {
    const swiperRef = useRef(null);

    useImperativeHandle(ref, () => ({
        prev: () => swiperRef.current?.swiper.slidePrev(),
        next: () => swiperRef.current?.swiper.slideNext(),
    }));

    const services = [
        { id: 1, name: 'Gas', description: '95 / 98' },
        { id: 2, name: 'Diesel', description: 'S10/S500' },
        { id: 3, name: 'LPG', description: 'Liquefied Petroleum Gas' },
        { id: 4, name: 'Fuel Premium', description: 'High-quality fuel' },
    ];

    return (
        <div className="h-96">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id} className="flex justify-center">
                        <div className="w-64 h-full bg-orange-600  flex flex-col justify-between  items-center p-8 text-white">

                            <div className="text-7xl font-bold">
                                {String(service.id).padStart(2, '0')}
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold mb-2">{service.name}</h3>
                                <p className="text-sm opacity-90">{service.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

Carrosel.displayName = 'Carrosel';
export default Carrosel;