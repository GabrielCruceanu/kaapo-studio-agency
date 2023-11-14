"use client";
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="column">
                <h6 className="sub-title mb-30">Social Media</h6>
                <ul className="rest">
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">Facebook</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">twitter</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">LinkedIn</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">Behance</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Our Office : </h6>
                <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
                <h5 className="mt-15 underline">
                  <a href="#0">+2 456 34324 45</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container bord pt-30 pb-30 bord-thin-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="/about" className="animsition-link">FAQ</a>
                  </li>
                  <li>
                    <a href="/about" className="animsition-link">Careers</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © 2023 Bayone is Proudly Powered by <span className="underline"><a href="https://themeforest.net/user/themescamp" target="_blank">ThemesCamp</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer