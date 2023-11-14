"use client";
import React from 'react';

function TopContent() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">The <br /> Challenge</h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h5>
              <p className="fz-18">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
            <div className="accordion bord mt-100">

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".1s">
                <div className="title">
                  <h4 className="fw-300">The Power of Influencer Marketing</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".3s">
                <div className="title">
                  <h4 className="fw-300">Unique and Influential Design</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".5s">
                <div className="title">
                  <h4 className="fw-300">We Build and Activate Brands</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                </div>
              </div>

              <div className="item wow fadeInUp" onClick={openAccordion} data-wow-delay=".7s">
                <div className="title">
                  <h4 className="fw-300">Unique and Influential Design</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopContent