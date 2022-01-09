import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import CardProductBig from '../Product/CardProductBig';
import "swiper/css"
import "swiper/css/navigation"
import { IProduct } from '../../global.types';


SwiperCore.use([Navigation]);

const MockupProduct: IProduct = {
    id: "1",
    attributes: {
        name: 'BH30/803 - ROGER Brushless pohony posuvných bran do Umami lo-fi bushwick swag',
        subtitle: '',
        price: 1780
    },
    quantity: 0
}

function SwiperProductsInCategory() {
    return (
        <Swiper navigation={true} spaceBetween={10} breakpoints={{ "640": { "slidesPerView": 2, "spaceBetween": 20 }, "768": { "slidesPerView": 3 }, "992": { "slidesPerView": 4 } }}>
            <SwiperSlide><CardProductBig product={MockupProduct} /></SwiperSlide>
            <SwiperSlide><CardProductBig product={MockupProduct} /></SwiperSlide>
            <SwiperSlide><CardProductBig product={MockupProduct} /></SwiperSlide>
            <SwiperSlide><CardProductBig product={MockupProduct} /></SwiperSlide>
            <SwiperSlide><CardProductBig product={MockupProduct} /></SwiperSlide>
        </Swiper>
    )
}

export default SwiperProductsInCategory
