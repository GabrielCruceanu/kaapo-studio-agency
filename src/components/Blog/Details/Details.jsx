import React from 'react';
//= Components
import Content from './Content';
import InfoArea from './InfoArea';
import AuthorArea from './AuthorArea';
import NextPrev from './NextPrev';
import CommentsForm from './CommentsForm';

function Details() {
  return (
    <section className="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="main-post section-padding">
              {/* Blog Content */}
              <Content />
              {/* Info Area */}
              <InfoArea />
              {/* Author Area */}
              <AuthorArea />
              {/* Next Prev */}
              <NextPrev />
            </div>
          </div>
        </div>
      </div>
      {/* Comments Form */}
      <CommentsForm />
    </section>
  )
}

export default Details