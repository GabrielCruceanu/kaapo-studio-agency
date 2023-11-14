import React from 'react';

function Header() {
  return (
    <header className="header-blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cont text-center">
              <p>
                <a href="/landing" className="animsition-link">Home</a>
                <span className="ml-10 mr-10">/</span>
                <span>Blog List</span>
              </p>
              <h1>Blog & Insights</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header