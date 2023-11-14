import React from 'react';
//= Static Data
import data from '../../data/CreativeAgency/works.json';

function Works() {
  return (
    <section className="work section-padding bg-gray text-dark">
      <div className="marquee-head">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-12">
              <div className="main-marq">
                <div className="slide-har st1">
                  <div className="box non-strok">
                    {new Array(5).fill().map((_, i) => (
                      <div className="item" key={i}>
                        <h2>Selected Projects</h2>
                      </div>
                    ))}
                  </div>
                  <div className="box non-strok">
                    {new Array(5).fill().map((_, i) => (
                      <div className="item" key={i}>
                        <h2>Selected Projects</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gallery-img">
          {data.map(item => (
            <div className={`col-lg-${item.col} ${item.valign ? 'valign' : ''} ${item.offset ? 'offset-lg-2' : ''}`} key={item.id}>
              <div className="item">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="info d-flex align-items-center mt-20">
                  <div>
                    <h5 className="fz-20">{item.title}</h5>
                  </div>
                  <div className="ml-auto">
                    <span className="text-u fz-13">{item.category}</span>
                  </div>
                </div>
                <a href={item.link} className="link-overlay animsition-link"></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
