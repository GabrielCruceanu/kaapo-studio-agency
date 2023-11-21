import React from 'react';

function Header({ service }) {
    return (
        <header className="about-header section-padding pb-0">
            <div className="container mt-100">
                <div className="row">
                    <div className="col-lg-9 offset-lg-1">
                        <div className="cont">
                            <h1 className="text-u">{service?.title}</h1>
                            <h6 className="sub-title mb-15">{service?.subTitle}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img mt-80" data-overlay-dark="4">
                <img src="/assets/imgs/b3.jpg" alt="" />
            </div>
        </header>
    );
}

export default Header;
