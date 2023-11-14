"use client";
import React, { useEffect } from 'react';
//= Scripts
import initIsotope from '../../common/initIsotope';
//= Static Data
import data from '../../data/Portfolio/grid-classic.json';

function GridClassic() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <section className="portfolio-classic portfolio pt-50 pb-40 bord-thin-bottom">
      <div className="container-fluid">
        <div className="gallery">
          <div className="row lg-marg">
            {data.map((item, index) => (
              <div className={`items col-${index > 1 && (index + 1) % 3 === 0 ? '12' : 'md-6'}`} key={item.id}>
                <div className="item mb-80">
                  <div className="img">
                    <img src={item.image} alt="" />
                    <a href={item.link} className="animsition-link link-overlay"></a>
                  </div>
                  <div className="info mt-30">
                    <span className="mb-5">{item.category}</span>
                    <h5>{item.title}</h5>
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

export default GridClassic
