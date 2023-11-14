'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
//= Static Data
import data from '../../data/Landing/brands.json';

const swiperOptions = {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
}

function Brands() {
  return (
    <div className="clients-carso">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="swiper5">
              <Swiper id="content-carousel-container-unq-clients" className="swiper-container" {...swiperOptions}>
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="item">
                      <div className="img icon-img-100">
                        <a href="#0">
                          <img src={item.img} alt="" />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands;
