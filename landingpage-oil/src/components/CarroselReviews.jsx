import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import image1 from '../img/3.png';
import image2 from '../img/4.png';
import image3 from '../img/5.png';
import image4 from '../img/6.png';

import aspaaberta from '../img/aspa-aberta.svg';
import aspafechada from '../img/aspa-fechada.svg';

const CarroselReviews = forwardRef((props, ref) => {
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
        <div className="w-full">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="w-full py-4"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="flex justify-center h-auto">

                 
                        <div className="w-full max-w-sm h-full min-h-100 border border-orange-600 rounded-4xl flex flex-col items-center p-8 text-white relative bg-black">

                            <img
                                src={aspaaberta}
                                alt="Aspa"
                                className="w-8 h-8 absolute top-6 left-6 opacity-60"
                            />

                            <div className="rounded-full overflow-hidden w-24 h-24 border-2 border-orange-600 mt-2 mb-6 shrink-0">
                                <img src={review.perfil} alt={review.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="text-center flex flex-col grow justify-between w-full px-2 z-10">
                                <p className="text-sm md:text-base leading-relaxed mb-6 opacity-90 wrap-break-word">
                                    "{review.description}"
                                </p>
                                <h3 className="text-xl font-bold mt-auto">{review.name}</h3>
                            </div>

                            <img
                                src={aspafechada}
                                alt="Aspa"
                                className="w-8 h-8 absolute bottom-6 right-6 opacity-60"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

CarroselReviews.displayName = 'CarroselReviews';
export default CarroselReviews;