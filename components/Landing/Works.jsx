"use client";
import React, { useEffect } from 'react';
//= Static Data
import data from '../../data/Landing/works.json';

function Works() {
  useEffect(() => {
    if (window.innerWidth > 991) {
      let sections = gsap.utils.toArray(".panel");
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".thecontainer",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
        }
      });
    }
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    const allTriggers = ScrollTrigger.getAll();
    if (window.innerWidth < 991 && allTriggers.length || window.innerWidth > 991 && !allTriggers.length) {
      window.location.reload();
    }

    allTriggers.forEach((trigger) => {
      trigger.update();
    });
  }

  return (
    <section className="works thecontainer ontop sub-bg">
      {data.map(item => (
        <div className="panel" key={item.id}>
          <div className="item">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="cont d-flex align-items-center">
              <div>
                <span>{item.category}</span>
                <h5>{item.title}</h5>
              </div>
              <div className="ml-auto">
                <h6>{item.year}</h6>
              </div>
            </div>
            <a href={item.link} className="link-overlay animsition-link"></a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Works
