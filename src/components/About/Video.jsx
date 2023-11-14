import React from 'react';
//= Static Data
import data from '../../data/About/brands.json';

function Video() {
  return (
    <div className="vid-sec sub-bg pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="vid-intro">
              <div className="video-container">
                <video autoPlay loop muted>
                  <source src="/assets/vid/vid-startup.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brands mt-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="brand-items">
                <div className="row">
                  {data.map(item => (
                    <div className="col-lg-3 col-md-4 col-6 item" key={item}>
                      <div className="img">
                        <img src={item} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
