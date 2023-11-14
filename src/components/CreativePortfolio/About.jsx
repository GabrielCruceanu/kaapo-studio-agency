"use client";
import React from 'react';
//= Static Data
import data from '../../data/CreativePortfolio/about.json';

function About() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="intro section-padding pb-0">
      <div className="container">
        <div className="row pb-100 bord-thin-bottom mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title fz-20 md-mb50">Company.</h6>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div>
              <h3 className="text-u text-indent">Our experience in design spans geographies and cultures, industries and business objectives.</h3>
              <div className="text mt-30">
                <p>The Koyeb unified platform lets you combine the languages, frameworks and technologies you love. Deploy any application thanks to native support of popular languages and built-in Docker container deployment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title fz-20 md-mb50">Our <br /> Services.</h6>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="cont">
              <div className="accordion bord">
                {data.map((item, index) => (
                  <div key={item.id} className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay={`${((index * 0.2) + 0.1).toFixed(1)}s`}>
                    <div className="title">
                      <h4>{item.title}</h4>
                      <span className="ico"></span>
                    </div>
                    <div className="accordion-info">
                      <p>{item.content}</p>
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

export default About
