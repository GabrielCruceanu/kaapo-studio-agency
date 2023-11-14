import React from 'react';

function Header() {
  return (
    <header className="crev-header2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mb-50">
            <div className="text d-flex f-bold">
              <span>We</span>
              <div className="img">
                <img src="/assets/imgs/c1.jpg" alt="" />
              </div>
              <span>Are</span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text f-ultra-light">
              <span>Studio</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-long">
              <div className="iner-img">
                <img src="/assets/imgs/c2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p>We are a strategic partner to our clients. We will help you to ideate, design
              and implement your product from conception to iterative development support,
              always taking the initiative and working proactively.</p>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="text text-lg text-center mt-50 f-bold">
              <span>Agency</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header