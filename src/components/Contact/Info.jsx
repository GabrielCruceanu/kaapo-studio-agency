import React from 'react';

function Info() {
  return (
    <section className="info-contact section-padding sub-bg pt-0">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <span className="sub-title mb-15 opacity-8">- Contact Info</span>
          <h3 className="text-u fz-50">Contact With Us!</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50 md-mb50">
              <span className="sub-title opacity-8 mb-5">Email :</span>
              <h6>hello@Bayone.com</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50">
              <span className="sub-title opacity-8 mb-5">office :</span>
              <h6>Besòs 1, 08174 Sant Cugat <br /> del Vallès, Barcelona</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <span className="sub-title opacity-8 mb-5">Phone :</span>
              <h6>+2 456 34324 45</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info