import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import CarrosselItem from './CarrosselItem.js'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../css/carrossel.css';

function Carrossel({resultado}) {
    return (
        <section className='containerSwiper'>
            <Swiper
                modules={[Navigation, Pagination]}
                direction='horizontal'
                slidesPerView={3}
                navigation
                pagination={{ clickable: true, }}
            >
                {resultado !== null && resultado.map(pais => {
                    return (
                        <SwiperSlide
                            key={pais.name.official}
                        >
                            <CarrosselItem pais={pais} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default memo(Carrossel);
