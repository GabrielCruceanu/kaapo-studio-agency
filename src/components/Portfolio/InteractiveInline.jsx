"use client";
import React, { useEffect } from 'react';
//= Scripts
import HoverImgFx1 from '../../common/hoverEffect1';
//= Static Data
import data from '../../data/Portfolio/interactive-inline.json';

function InteractiveInline() {
  useEffect(() => {
    [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
  }, []);

  return (
    <section className="interactive-inline d-flex align-items-end">
      <div className="container">
        {data.map(item => (
          <div className="item block" data-fx="1" key={item.id}>
            <a href={item.link} className="block__link animsition-link" data-img={item.image}></a>
            <div className="cont">
              <span className="mb-10 text-u">{item.number}<span className="ml-10 mr-10">/</span>{item.category}</span>
              <h4 className="f-bold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InteractiveInline
