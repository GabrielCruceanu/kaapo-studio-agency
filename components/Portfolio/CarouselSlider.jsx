'use client';
import React, { useEffect, useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper';
//= Scripts
import loadBackgroudImages from '../../common/loadBackgroudImages';
//= Static Data
import data from '../../data/Portfolio/carousel-slider.json';

function CarouselSlider() {
  const [galleryImg, setGalleryImg] = useState(null);
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryImageOptions = {
    modules: [Navigation, Autoplay, Keyboard, Mousewheel, Pagination],
    onSwiper: function (swiper) {
      setGalleryImg(swiper);
    },
    spaceBetween: 80,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.carousel-slider .swiper-controls .swiper-button-next',
      prevEl: '.carousel-slider .swiper-controls .swiper-button-prev',
    },
    pagination: {
      el: '.carousel-slider .swiper-pagination',
      clickable: true,
      renderBullet: function (_, className) {
        return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
          '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
          'stroke-opacity="1" stroke-width="1px"></circle>' +
          '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
          '</svg></span>';
      },
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    }
  }

  const swiperGalleryTextOptions = {
    modules: [Mousewheel],
    onSwiper: function (swiper) {
      setGalleryText(swiper);
    },
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    mousewheel: true,
    speed: 1500,
  }

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    if (galleryImg && galleryText) {
      galleryImg.on("slideChangeTransitionStart", function () {
        galleryText.slideTo(galleryImg.activeIndex);
      });
      galleryText.on("transitionStart", function () {
        galleryImg.slideTo(galleryText.activeIndex);
      });
    }
  }, [galleryImg, galleryText]);

  return (
    <header className="carousel-slider valign">
      <div className="full-width">
        <div className="gallery-img">
          <Swiper {...swiperGalleryImageOptions} className="swiper-container">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="bg-img" data-background={item.background} data-overlay-dark="3">
                    <a href={item.link} className="animsition-link"></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="gallery-text">
          <Swiper {...swiperGalleryTextOptions} className="swiper-container swiper-container-initialized swiper-container-vertical">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text">
                  <h4>{item.text.title}</h4>
                  <h6><span>{item.text.subtitle}</span></h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="swiper-controls">
        <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div><i className="fas fa-chevron-right"></i></div>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
          <div><i className="fas fa-chevron-left"></i></div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </header>
  )
}

export default CarouselSlider;
