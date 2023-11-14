'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30
}

function Header() {
  return (
    <header className="header-project2 section-padding pb-0">
      <div className="container mt-80 mb-80">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">Artboard Studio</h1>
              <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>Development</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Client :</span>
                    <h6>Envato</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Start Date :</span>
                    <h6>7 August 2023</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Designer :</span>
                    <h6>ThemesCamp</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="project2">
          <div id="content-carousel-container-unq-project2" className="swiper-container">
            <Swiper {...swiperOptions} className="swiper-container" id="content-carousel-container-unq-project2">
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/2/1.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/2/2.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img">
                  <img src="/assets/imgs/works/projects/2/3.jpg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;