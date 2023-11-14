import React from 'react';
//= Static Data
import data from '../../data/Landing/marquee.json';

function Marquee() {
  return (
    <section className="marquee">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div className="main-marq">
              <div className="slide-har st1">
                <div className="box non-strok">
                  {data.map(item => (
                    <div className="item" key={item.id}>
                      <h4 className="d-flex align-items-center"><span>{item.title}</span>
                        <span className="ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="box non-strok">
                  {data.map(item => (
                    <div className="item" key={item.id}>
                      <h4 className="d-flex align-items-center"><span>{item.title}</span>
                        <span className="ml-50 stroke icon">*</span>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marquee
