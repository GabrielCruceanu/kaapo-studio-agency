import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
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
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <span className="sub-title mb-15 opacity-8">- About Us</span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="intro">
              <div className="text-reval">
                <span className="text">We are a creative agency working with</span>
                <span className="text">brands – building insightful strategy,</span>
                <span className="text">creating unique designs.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="serv-inline mt-80">
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <div className="item pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom wow fadeInUp"
                data-wow-delay=".2s">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="mb-10 opacity-8">01 / <span className="text-u ml-5">Branding</span></span>
                    <h5>Branding & Design</h5>
                  </div>
                  <div className="ml-auto">
                    <div className="d-flex align-items-center">
                      <a href="/components/Landing/About" className="animsition-link">View Details</a>
                      <span className="fz-30 pe-7s-angle-right"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item pb-30 mb-30 bord-thin-bottom wow fadeInUp"
                data-wow-delay=".4s">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="mb-10 opacity-8">02 / <span className="text-u ml-5">Branding</span></span>
                    <h5>Brand Strategy & Voice</h5>
                  </div>
                  <div className="ml-auto">
                    <div className="d-flex align-items-center">
                      <a href="/components/Landing/About" className="animsition-link">View Details</a>
                      <span className="fz-30 pe-7s-angle-right"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item pb-30 bord-thin-bottom wow fadeInUp" data-wow-delay=".6s">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="mb-10 opacity-8">03 / <span className="text-u ml-5">Design</span></span>
                    <h5>Digital & Web Design</h5>
                  </div>
                  <div className="ml-auto">
                    <div className="d-flex align-items-center">
                      <a href="/components/Landing/About" className="animsition-link">View Details</a>
                      <span className="fz-30 pe-7s-angle-right"></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
