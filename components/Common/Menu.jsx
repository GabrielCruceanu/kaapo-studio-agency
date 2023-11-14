"use client";
import React from 'react';

function Menu() {
  function closeMenu() {
    document.querySelector('.hamenu').classList.remove("open");
  }

  function handleMouseEnter(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
    event.currentTarget.style.opacity = "1";
  }

  function handleMouseLeave(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
  }

  function handleOpenDMenu(event) {
    document.querySelector(".main-menu").classList.add("gosub");
    event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
  }

  function handleCloseDMenu() {
    document.querySelector(".main-menu").classList.remove("gosub");
    document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
  }

  return (
    <div className="hamenu valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <span className="link dmenu" onClick={handleOpenDMenu}><span className="nm">01.</span>Home </span>
                  </div>
                  <div className="sub-menu">
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <span className="sub-link back" onClick={handleCloseDMenu}><i className="pe-7s-angle-left"></i> Go Back</span>
                        </div>
                      </li>
                    </ul>
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <a href="/creative-agency" className="sub-link animsition-link" onClick={closeMenu}>Creative Agency</a>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <a href="/creative-portfolio"
                            className="sub-link animsition-link" onClick={closeMenu}>Creative Portfolio</a>
                        </div>
                      </li>
                      <li>
                        <div className="o-hidden">
                          <a href="/landing" className="sub-link animsition-link" onClick={closeMenu}>Home Landing</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/about" className="link animsition-link" onClick={closeMenu}><span className="nm">02.</span>About</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <span className="link dmenu" onClick={handleOpenDMenu}><span className="nm">03.</span>Portfolio </span>
                  </div>
                  <div className="sub-menu">
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <span className="sub-link back" onClick={handleCloseDMenu}><i className="pe-7s-angle-left"></i> Go Back</span>
                        </div>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="rest">
                          <li>
                            <div className="o-hidden">
                              <a href="/fullscreen" className="sub-link animsition-link" onClick={closeMenu}>Fullscreen Slider</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/carousel-slider" className="sub-link animsition-link" onClick={closeMenu}>Carousel Slider</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/half-slider" className="sub-link animsition-link" onClick={closeMenu}>Creative Slider</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-full" className="sub-link animsition-link" onClick={closeMenu}>Interactive Full</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-center" className="sub-link animsition-link" onClick={closeMenu}>Interactive Center</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="rest">
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-inline" className="sub-link animsition-link" onClick={closeMenu}>Interactive Inline</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-vertical" className="sub-link animsition-link" onClick={closeMenu}>Interactive Vertical</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-fixed-text" className="sub-link animsition-link" onClick={closeMenu}>Creative Portfolio</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-grid" className="sub-link animsition-link" onClick={closeMenu}>Portfolio Grid</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-grid-classic" className="sub-link animsition-link" onClick={closeMenu}>Portfolio Classic</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/blog" className="link animsition-link" onClick={closeMenu}><span className="nm">04.</span>Stories</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/contact" className="link animsition-link" onClick={closeMenu}><span className="nm">05.</span>Contact</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">Base</h6>
                <p className="fw-400 fz-18">Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
              </div>
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">How to Connect</h6>
                <p className="fw-400 fz-18">+2 456 34324 45</p>
                <p className="fw-400 fz-18">hello@Bayone.com</p>
              </div>
              <div className="bottom">
                <h6 className="text-u fw-600 mb-20">Follow Us</h6>
                <ul className="rest social-text d-flex fz-13">
                  <li className="mr-20">
                    <a href="/#0" className="hover-this"><span className="hover-anim">Facebook</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="/#0" className="hover-this"><span className="hover-anim">Twitter</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="/#0" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                  </li>
                  <li>
                    <a href="/#0" className="hover-this"><span className="hover-anim">Instagram</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu