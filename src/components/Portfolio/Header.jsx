import React from 'react'

function Header({ isCenter }) {
  return (
    <header className="portfolio-header section-padding ontop main-bg">
      <div className="container mt-80">
        <div className="row">
          <div className="col-12">
            <div className={`cont ${isCenter ? 'text-center' : ''}`}>
              <h1 className="fz-80 fw-500">Building <br /> digital experiences</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header