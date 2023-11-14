import React from 'react';
//= Static Data
import data from '../../data/CreativePortfolio/marquee.json';

function Marquee() {
  return (
    <section className="marquee pt-50 pb-50 bord-thin-bottom bord-thin-top mt-80">
      <div className="container-fluid rest">
        <div className="main-marq xlg-pading">
          <div className="slide-har st1">
            <div className="box">
              {data.map(item => (
                <div className="item" key={item.id}>
                  <h4 className="d-flex align-items-center f-bold"><span>{item.title}</span>
                    <span className="ml-50 stroke icon">*</span>
                  </h4>
                </div>
              ))}
            </div>
            <div className="box">
              {data.map(item => (
                <div className="item" key={item.id}>
                  <h4 className="d-flex align-items-center f-bold"><span>{item.title}</span>
                    <span className="ml-50 stroke icon">*</span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marquee
