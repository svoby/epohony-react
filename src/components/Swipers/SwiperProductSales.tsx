import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import CardProductSale from '../Product/CardProductSale';
import "swiper/css"
import "swiper/css/navigation"

SwiperCore.use([Navigation]);

function SwiperProductSales() {
    return (
        <div className="bg-secondary-alpha-20 p-2 border-radius-lg">
            <div className="row gutters-md">
                <div className="col-md-4 col-lg-3">
                    <div className="d-flex h-100 p-3 justify-content-between flex-column">
                        <div>
                            <h2 className="d-none d-xl-block h4 mb-0 text-red text-uppercase line-h-115">Zvýhodněné produkty</h2>
                            <h2 className="d-xl-none h5 mb-0 text-red text-uppercase line-h-115">Zvýhodněné produkty</h2>
                            <p className="small font-weight-bold text-uppercase">K TOMUTO ZBOŽÍ</p>
                        </div>
                        <div className="d-none d-md-inline-block sx-104 text-uppercase text-white text-micro position-relative">
                            <div className="bg-holder d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(/assets/images/svg/bg-hedgehog.svg)` }}>Výhodně</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-lg-9">
                    <Swiper navigation={true} spaceBetween={4} breakpoints={{ "640": { "slidesPerView": 2, "spaceBetween": 8 }, "992": { "slidesPerView": 3 } }}>
                        <SwiperSlide><CardProductSale /></SwiperSlide>
                        <SwiperSlide><CardProductSale /></SwiperSlide>
                        <SwiperSlide><CardProductSale /></SwiperSlide>
                        <SwiperSlide><CardProductSale /></SwiperSlide>
                        <SwiperSlide><CardProductSale /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default SwiperProductSales
