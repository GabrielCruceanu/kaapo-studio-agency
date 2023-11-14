import React from 'react';

function Form() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="full-width">
              <div className="sec-head text-center mb-80">
                <span className="sub-title mb-15 opacity-8">- Contact Us</span>
                <h3 className="text-u fz-50">Get In Touch.</h3>
              </div>
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                    </div>
                    <div className="text-center">
                      <div className="mt-30 hover-this cursor-pointer">
                        <button type="submit" className="hover-anim">
                          <span className="text">Let's Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form