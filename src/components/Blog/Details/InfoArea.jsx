import React from 'react';

function InfoArea() {
  return (
    <div className="info-area flex mt-20 pb-20">
      <div>
        <div className="tags flex">
          <div className="valign">
            <span>Tags :</span>
          </div>
          <div>
            <a href="/blog-classic">Tech</a>
            <a href="/blog-classic">ThemesCamp</a>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <div className="share-icon flex">
          <div className="valign">
            <span>Share :</span>
          </div>
          <div>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoArea