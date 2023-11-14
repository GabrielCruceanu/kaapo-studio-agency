'use client';
import React, { useEffect, useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Mousewheel, Pagination, Thumbs } from 'swiper';
//= Scripts
import loadBackgroudImages from '../../common/loadBackgroudImages';
//= Static Data
import data from '../../data/Portfolio/creative-slider.json';

function CreativeSlider() {
  const [galleryImg, setGalleryImg] = useState(null);
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryTextOptions = {
    modules: [Mousewheel, Thumbs],
    onSwiper: setGalleryText,
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: 2,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: false,
      },
      640: {
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        spaceBetween: 50,
        slidesPerView: 1,
        centeredSlides: false,
      },
      1024: {
        spaceBetween: 100,
        slidesPerView: 2,
        centeredSlides: true,
      },
    }
  }

  const swiperGalleryImageOptions = {
    modules: [Navigation, Keyboard, Mousewheel, Pagination, Thumbs],
    onSwiper: setGalleryImg,
    spaceBetween: 0,
    centeredSlides: true,
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.half-slider .swiper-controls .swiper-button-next',
      prevEl: '.half-slider .swiper-controls .swiper-button-prev',
    },
    pagination: {
      el: '.half-slider .swiper-pagination',
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
    thumbs: {
      swiper: galleryText
    }
  }

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

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="half-slider">
      <div className="gallery-img">
        <Swiper {...swiperGalleryImageOptions} className="swiper-container">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-img" data-background={item.background} data-overlay-dark="3">
                <a href={item.link} className="animsition-link"></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gallery-text">
        <Swiper {...swiperGalleryTextOptions} className="swiper-container">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="text">
                <h6><span className="f-bold">{item.text.subtitle}</span></h6>
                <h4>{item.text.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default CreativeSlider;
