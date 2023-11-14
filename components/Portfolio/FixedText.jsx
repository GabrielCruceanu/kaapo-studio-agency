"use client";
import React from 'react';
//= Static Data
import data from '../../data/Portfolio/fixed-text.json';

function FixedText() {
  function handleMouseEnter(event) {
    const tab_id = event.currentTarget.dataset.tab;

    document.querySelectorAll('.links-img li').forEach(el => el.classList.remove('current'));
    event.currentTarget.classList.add('current');

    document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('current'));
    document.querySelector("#" + tab_id).classList.add('current');

    if (event.currentTarget.classList.contains('current')) return false;
  }

  function handleMouseLeave() {
    document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
    document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('current'));
  }

  return (
    <section className="inter-fixed-text section-padding pt-40 o-hidden">
      <div className="container-xxl">
        <div className="links-img">
          <div className="row">
            {data.map(item => (
              <div className={`col-lg-${item.col} items`} key={item.id}>
                {item.col < 12 ?
                  <div className="item">
                    <div className="img" data-tab={`tab-${item.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <img src={item.image} alt="" />
                      <a href={item.link} className="animsition-link link-overlay"></a>
                    </div>
                  </div>
                  :
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="item">
                        <div className="img" data-tab={`tab-${item.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                          <img src={item.image} alt="" />
                          <a href={item.link} className="animsition-link link-overlay"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="links-text">
        <ul className="rest">
          {data.map(item => (
            <li id={`tab-${item.id}`} key={item.id}>
              <span className="tag">{item.tag}</span>
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FixedText
