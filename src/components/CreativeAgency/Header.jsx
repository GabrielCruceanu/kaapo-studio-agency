import React from 'react';

function Header() {
  return (
    <header className="crev-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="caption text-center">
              <h1 className="f-xbold"><span className="f-ultra-light d-block">Creative</span> Digital Agency</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="img mt-50">
        <img src="/assets/imgs/b2.jpg" alt="" />
      </div>
    </header>
  )
}

export default Header