import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { cities } from '../../assets/assets';

function Carousel() {
    return (
        <div className="carousel-container">
            <h1 className="carousel-heading">Top Picks</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper-container"
            >
                {cities.map((slide) => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                        <img src={slide.image} alt={slide.alt} />
                        <p className="slide-text">{slide.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
}

export default Carousel;