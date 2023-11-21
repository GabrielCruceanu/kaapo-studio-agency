import React from 'react';

function Header({ contact }) {
    return (
        <header className="contact-header section-padding">
            <div className="container mt-100">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="cont text-center mb-80">
                            <h6 className="sub-title mb-15">
                                <span className="icon-img-30 mr-10">
                                    <img src="/assets/imgs/svg-assets/hi.png" alt="" />
                                </span>{' '}
                                Hello, Let's get in touch
                            </h6>
                            <h1>Get In Touch.</h1>
                        </div>
                    </div>
                    <div className="col-lg-11">
                        <div className="google-map">
                            <iframe
                                id="gmap_canvas"
                                src="https://maps.app.goo.gl/1BntehBYmGxhwQdr8&t=&z=11&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
