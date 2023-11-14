"use client";
import React, { useEffect } from 'react';
//= Scripts
import HoverImgFx1 from '../../common/hoverEffect1';
//= Static Data
import data from '../../data/Portfolio/interactive-center.json';

function InteractiveCenter() {
  useEffect(() => {
    [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
  }, []);

  return (
    <section className="interactive-center">
      <div className="container text-center">
        {data.map(item => (
          <div className="item block" data-fx="1" key={item.id}>
            <a href={item.link} className="block__link animsition-link" data-img={item.image}>
              <div className="cont">
                <h4 className="f-bold">{item.title}</h4>
                <p>{item.category}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveCenter
