"use client";
import React, { useEffect } from 'react';

function Intro() {
  useEffect(() => {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="text">
              <span className="sub-title mb-15 opacity-8">- Who We Are?</span>
              <div className="text-reval">
                <h2 className="fz-50 text-u mb-30">
                  <span className="text">We are a creative studio with focus</span>
                  <span className="text">on set design, illustration and</span>
                  <span className="text"> motion design.</span>
                </h2>
              </div>
              <p>We create brand identities, digital experiences, and print materials that communicate clearly achieve marketing goals, and look fantastic. Urban design draws together the many strands of place-making, environmental stewardship.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row mt-80">
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Branding Strategy</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Digital Experiences</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Social Media</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Advertising</li>
                </ul>
              </div>
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Branding Strategy</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Digital Experiences</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Social Media</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Advertising</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list rest">
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Branding Strategy</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Digital Experiences</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Social Media</li>
                  <li className="fz-18 mb-15"><span className="mr-10">+</span> Advertising</li>
                </ul>
              </div>
            </div>
            <div className="row numbers mt-80">
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">48</h3>
                  <h6 className="fz-16">Projects Completed</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">64k</h3>
                  <h6 className="fz-16">Clients Around the World</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">30</h3>
                  <h6 className="fz-16">Total Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro