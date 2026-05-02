import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import image1 from '../img/3.png'
import image2 from '../img/4.png'
import image3 from '../img/5.png'
import image4 from '../img/6.png'

import aspaaberta from '../img/aspa-aberta.svg'
import aspafechada from '../img/aspa-fechada.svg'


const Carrosel = forwardRef((props, ref) => {
    const swiperRef = useRef(null);

    useImperativeHandle(ref, () => ({
        prev: () => swiperRef.current?.swiper.slidePrev(),
        next: () => swiperRef.current?.swiper.slideNext(),
    }));

    const reviews = [
        { id: 1, name: 'John Garcia', description: 'As a regular customer, I can wholeheartedly recommend this company. Everything is always at the highest level – from the quality of the fuel to customer service.', perfil: image1 },
        { id: 2, name: 'Jason Lewis', description: 'As a regular customer, I can wholeheartedly recommend this company. Everything is always at the highest level – from the quality of the fuel to customer service.', perfil: image2 },
        { id: 3, name: 'Mageret Garcia', description: 'Liquefied For several years now, this company has been my go-to fuel supplier. The product is consistently high quality, my car runs perfectly, and the team is always quick and professional. Reliable service every time. Gas', perfil: image4 },
        { id: 4, name: 'Cody Fisher', description: 'Liquefied For several years now, this company has been my go-to fuel supplier. The product is consistently high quality, my car runs perfectly, and the team is always quick and professional. Reliable service every time. Gas', perfil: image3 },
    ];

    return (
        <div className="h-96">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="flex justify-center items-center">
                        <div className="w-96 h-full border border-orange-600 rounded-lg flex flex-col justify-between items-center p-6 text-white relative">

                            <img
                                src={aspaaberta}
                                alt="Aspa"
                                className="w-8 h-8 absolute top-4 left-4 opacity-60"
                            />

                            <div className="rounded-full overflow-hidden w-20 h-20 border-2 border-orange-600 mt-8">
                                <img src={review.perfil} alt={review.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="text-center flex-1 flex flex-col justify-center px-2">
                                <p className="text-sm leading-relaxed mb-4 opacity-90">
                                    "{review.description}"
                                </p>
                                <h3 className="text-lg font-bold">{review.name}</h3>
                            </div>

                            <img
                                src={aspafechada}
                                alt="Aspa"
                                className="w-8 h-8 absolute bottom-4 right-4 opacity-60 transform"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
});

Carrosel.displayName = 'Carrosel';
export default Carrosel;