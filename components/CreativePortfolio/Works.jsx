'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
//= Static Data
import data from '../../data/CreativePortfolio/works.json';

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".work-crev .swiper-button-next",
    prevEl: ".work-crev .swiper-button-prev",
  }
}

function Works() {
  return (
    <section className="work-crev section-padding bg-gray text-dark">
      <div className="container">
        <div className="sec-head pb-20 bord-thin-bottom mb-80">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="f-bold text-u">Recent Work</h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-button-next">
                <span className="pe-7s-angle-left"></span>
              </div>
              <div className="swiper-button-prev">
                <span className="pe-7s-angle-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="work-crus">
          <Swiper {...swiperOptions}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="item">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cont">
                    <div>
                      <span>{item.category}</span>
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                  <a href={item.link} className="link-overlay animsition-link"></a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Works;
