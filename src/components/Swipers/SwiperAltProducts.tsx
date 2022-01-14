import React from 'react'
import CardProductAlt from '../Product/CardProductAlt'
// import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css"
import "swiper/css/navigation"
import { Col, Row } from '../../layout/Grid';

SwiperCore.use([Navigation])

function SwiperAltProducts() {
    return (
        // <Swiper navigation={true} spaceBetween={10} breakpoints={{ "640": { "slidesPerView": 2, "spaceBetween": 20 }, "768": { "slidesPerView": 3 }, "992": { "slidesPerView": 4 } }}>
        //     <SwiperSlide><CardProductAlt /></SwiperSlide>
        //     <SwiperSlide><CardProductAlt /></SwiperSlide>
        //     <SwiperSlide><CardProductAlt /></SwiperSlide>
        //     <SwiperSlide><CardProductAlt /></SwiperSlide>
        //     <SwiperSlide><CardProductAlt /></SwiperSlide>
        // </Swiper>
        <Row>
            <Col size="col-md-4 mb-4">
                <CardProductAlt />
            </Col>
            <Col size="col-md-4 mb-4">
                <CardProductAlt />
            </Col>
        </Row>
    )
}

export default SwiperAltProducts
