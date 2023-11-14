'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
//= Scripts
import removeSlashFromPagination from '../../common/removeSlashFromPagination';
//= Static Data
import data from '../../data/CreativePortfolio/testimonials.json';
import brandsData from '../../data/CreativePortfolio/brands.json';

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
}

function Testimonials() {
  useEffect(() => {
    removeSlashFromPagination();
  }, []);

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="sec-head pb-20 bord-thin-bottom mb-80">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="f-bold text-u">Testimonials</h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-button-prev">
                <span className="pe-7s-angle-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="pe-7s-angle-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="testim">
              <Swiper id="content-carousel-container-unq-testim" className="swiper-container" {...swiperOptions}>
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="item">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="quote-icon icon-img-80 pt-10">
                            <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="cont">
                            <h4 className="fz-24">{item.quote}</h4>
                            <div className="info mt-30">
                              <h5 className="text-u ls1">{item.author}</h5>
                              <span className="sub-title opacity-8 mt-5">{item.client}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div className="clients-marq no-bord pt-80">
        <div className="container">
          <div className="main-marq">
            <div className="slide-har st1">
              <div className="box non-strok">
                {brandsData.map(item => (
                  <div className="item" key={item}>
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={item} alt="" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="box non-strok">
                {brandsData.map(item => (
                  <div className="item" key={item}>
                    <div className="img icon-img-100">
                      <a href="#0">
                        <img src={item} alt="" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
