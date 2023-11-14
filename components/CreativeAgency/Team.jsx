import React from 'react';
//= Static Data
import data from '../../data/CreativeAgency/team.json';

function Team() {
  return (
    <section className="team section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-head mb-80">
              <span className="sub-title bord mb-30">Team</span>
              <h3 className="text-u text-indent ls1">We help to create strategies & Design.
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div className={`item ${index !== data.length - 1 ? 'md-mb50' : ''}`}>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="info mt-20">
                  <span className="fz-12 opacity-8">{item.role}</span>
                  <h6 className="fz-18">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
