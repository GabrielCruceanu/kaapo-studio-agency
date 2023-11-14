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
    <section className="contact section-padding">
      <div className="contact-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sec-head mb-80">
                <span className="sub-title mb-15 opacity-8">- Contact Us</span>
                <h3 className="text-u f-bold fz-50">Get In <span className="f-ultra-light">Touch</span>.</h3>
              </div>
              <div className="full-width">
                <form id="contact-form" method="post" action="contact.php">
                  <div className="messages"></div>
                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                      </div>
                      <div className="mt-30 hover-this cursor-pointer">
                        <button type="submit" className="hover-anim">
                          <span className="text">Let's Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact