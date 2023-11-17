import React from 'react';

function About({ about }) {
    return (
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11">
                        <span className="sub-title bord mb-30">{about.subtitle}</span>
                        <h3 className="text-u text-indent ls1">{about.intro}</h3>
                    </div>
                    <div className="col-lg-7 offset-lg-5">
                        <div className="text mt-50">
                            <p>{about.vision}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
