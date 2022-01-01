import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import CardProductBig from '../Product/CardProductBig';
import "swiper/css"
import "swiper/css/navigation"

SwiperCore.use([Navigation]);

function SwiperProductsInCategory() {
    return (
        <Swiper navigation={true} spaceBetween={10} breakpoints={{ "640": { "slidesPerView": 2, "spaceBetween": 20 }, "768": { "slidesPerView": 3 }, "992": { "slidesPerView": 4 } }}>
            <SwiperSlide><CardProductBig /></SwiperSlide>
            <SwiperSlide><CardProductBig /></SwiperSlide>
            <SwiperSlide><CardProductBig /></SwiperSlide>
            <SwiperSlide><CardProductBig /></SwiperSlide>
            <SwiperSlide><CardProductBig /></SwiperSlide>
        </Swiper>
    )
}

export default SwiperProductsInCategory
