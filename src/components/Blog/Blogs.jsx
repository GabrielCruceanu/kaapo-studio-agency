"use client";
import React, { useEffect } from 'react';
//= Scripts
import initIsotope from '../../common/initIsotope';
//= Static Data
import data from '../../data/Blog/blogs.json';

function Blogs() {
  useEffect(() => {
    initIsotope();
  }, [])


  return (
    <section className="blog-column section-padding pt-90">
      <div className="container">
        <div className="gallery">
          <div className="row">
            {data.map(item => (
              <div className="items col-lg-4 col-md-6" key={item.id}>
                <div className="item">
                  <div className="img">
                    <img src={item.image} alt="" />
                    <span className="date"><strong>{item.date.day}</strong> {item.date.month}</span>
                  </div>
                  <div className="cont">
                    <span className="sub-title mb-15 opacity-8">{item.category}</span>
                    <h4>{item.title}</h4>
                    <a href={item.link} className="animsition-link more mt-20">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
