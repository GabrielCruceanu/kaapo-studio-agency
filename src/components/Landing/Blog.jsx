"use client";
import React, { useEffect } from 'react';
//= Scripts
import HoverImgFx3 from '../../common/hoverEffect3';
//= Static Data
import data from '../../data/Landing/blog.json';

function Blog() {
  useEffect(() => {
    [...document.querySelectorAll('[data-fx="3"] > a, a[data-fx="3"]')].forEach(link => new HoverImgFx3(link));
    [...document.querySelectorAll('.block__title, .block__link, .content__text-link')].forEach((el) => {
      const imgsArr = el.dataset.img.split(',');
      for (let i = 0, len = imgsArr.length; i <= len - 1; ++i) {
        const imgel = document.createElement('img');
        imgel.style.visibility = 'hidden';
        imgel.style.width = 0;
        imgel.src = imgsArr[i];
        imgel.className = 'preload';
      }
    });
  }, []);

  return (
    <section className="blog-list section-padding bg-gray text-dark">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center justify-end">
            <div>
              <span className="sub-title mb-15 opacity-8">- News</span>
              <h3 className="text-u f-bold fz-50">Blog & <span className="f-ultra-light">Insights</span></h3>
            </div>
            <div className="ml-auto underline">
              <a href="/src/components/Landing/Blog" className="animsition-link all-more sub-title ls1">
                <span>View All Posts <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg></span>
              </a>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div className="item block wow fadeInUp" data-wow-delay={`${(index * 0.2) + 0.2}s`} data-fx="3" key={item.id}>
            <a href={item.link} className="block__link animsition-link" data-img={item.img}></a>
            <div className="row">
              <div className="col-lg-6 cont">
                <div className="info">
                  <span className="tag">{item.tag}</span>
                  <span className="date">{item.date}</span>
                </div>
                <h3 className="text-u">{item.title}</h3>
              </div>
              <div className="col-lg-3 offset-lg-3 d-flex align-items-center justify-end">
                <div className="ml-auto">
                  <a href={item.readMoreLink} className="more mt-15 animsition-link">
                    <span>Continue Read <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
