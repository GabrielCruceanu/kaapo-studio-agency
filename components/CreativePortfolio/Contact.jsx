"use client";
import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.contact-container', { yPercent: -50 })
      const cover = gsap.timeline({ paused: true })
      cover.to('.contact-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: '.main-box',
        start: 'bottom bottom',
        end: '+=50%',
        animation: cover,
        scrub: true,
      });
    }
  }

  return (
    <section className="call-action section-padding bord-thin-bottom">
      <div className="contact-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="mb-30">
                  <span className="sub-title bord">Work With Us</span>
                </div>
                <h2 className="fz-70 f-bold text-u">We would love <span className="d-block f-ultra-light">to hear more about</span> your project
                </h2>
                <a href="/components/CreativePortfolio/Contact" className="butn-circle animsition-link colorbg mt-30">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
