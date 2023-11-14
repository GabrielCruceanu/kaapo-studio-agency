"use client";
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '../../../common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project4 bg-img d-flex align-items-end" data-background="/assets/imgs/works/projects/1/1.jpg" data-overlay-dark="3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption text-center">
              <h1>Technology Process</h1>
            </div>
          </div>
        </div>
        <div className="info mt-80 pt-50 bord-thin-top">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>Development</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Client :</span>
                <h6>Envato</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>7 August 2023</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Designer :</span>
                <h6>ThemesCamp</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
