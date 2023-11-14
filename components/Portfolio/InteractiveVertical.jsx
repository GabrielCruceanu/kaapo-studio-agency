"use client";
import React from 'react';
//= Static Data
import data from '../../data/Portfolio/interactive-vertical.json';

function InteractiveVertical() {
  function handleMouseEnter(event) {
    const tab_id = event.currentTarget.dataset.tab;

    document.querySelectorAll('.links-text li').forEach(el => {
      el.classList.remove('current')
      el.classList.remove('no-active')
    });
    event.currentTarget.classList.add('current');
    event.currentTarget.classList.remove('no-active')

    document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
    document.querySelector("#" + tab_id).classList.add('current');

    if (event.currentTarget.classList.contains('current')) return false;
  }

  function handleMouseLeave() {
    document.querySelectorAll('.links-text li').forEach(el => {
      el.classList.remove('current')
      el.classList.remove('no-active')
    });
    document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
  }

  return (
    <section className="inter-links-center vertical d-flex align-items-end section-padding pb-80">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="links-text">
              <ul className="rest">
                {data.map((item) => (
                  <li data-tab={`tab-${item.id}`} key={item.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <h2>
                      <span className="num">0{item.id}.</span>
                      <a href={item.link} className="animsition-link"><span className="text f-bold">{item.text}</span> </a>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="links-img">
        {data.map(item => (
          <div id={`tab-${item.id}`} className="img" data-overlay-dark="3" key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveVertical
