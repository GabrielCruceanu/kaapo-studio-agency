"use client";
import React, { useEffect } from 'react';
import loadBackgroudImages from '../../../common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project1">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">Artboard Studio</h1>
              <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>Development</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Client :</span>
                    <h6>Envato</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Start Date :</span>
                    <h6>7 August 2021</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Designer :</span>
                    <h6>Ui-ThemeZ</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img mt-100" data-background="/assets/imgs/works/projects/0/1.jpg"></div>
    </header>
  )
}

export default Header
