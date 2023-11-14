'use client';
import React from 'react';
//= Static Data
import data from '../../data/Landing/accordions.json';

function Accordions() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="exp valign text-center">
              <div className="full-width">
                <h2>12+</h2>
                <h6 className="sub-title">Years of Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion bord full-width">
              <div className="sec-head mb-70">
                <span className="sub-title mb-15 opacity-8">- Services</span>
                <h3 className="text-u f-bold fz-50">What We <span className="f-ultra-light">Do</span> ?</h3>
              </div>
              {data.map((item, index) => (
                <div className={`item ${index !== data.length - 1 ? 'mb-20' : ''} wow fadeInUp`} data-wow-delay={`${(index * 0.2) + 0.1}s`} onClick={openAccordion} key={item.id}>
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
    </section>
  )
}

export default Accordions
