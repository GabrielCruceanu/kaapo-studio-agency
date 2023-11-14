"use client";
import React, { useEffect } from 'react';
//= Scripts
import initIsotope from '../../common/initIsotope';
//= Static Data
import data from '../../data/Portfolio/grid.json';

function Grid() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <section className="portfolio-grid portfolio pt-50">
      <div className="container pb-40 bord-thin-bottom">
        <div className="gallery">
          <div className="row lg-marg">
            {data.map((item, index) => (
              <div className={`items col-lg-4 col-md-6 ${index === 1 ? 'mt-80' : ''}`} key={item.id}>
                <div className="item mb-80">
                  <div className="img">
                    <img src={item.image} alt="" />
                    <div className="info-over">
                      <h5>{item.title}</h5>
                      <span>{item.category}</span>
                    </div>
                    <a href={item.link} className="animsition-link link-overlay"></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid
