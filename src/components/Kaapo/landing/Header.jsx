import React from 'react';
import Link from 'next/link';

function Header({ lang, home }) {
    return (
        <header className="crev-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="caption text-center">
                            <h1>{home.title}</h1>
                        </div>
                        <div className="caption text-center mt-20">
                            <p>{home.description}</p>
                            <div className="d-flex align-items-center justify-content-center ">
                                <Link
                                    href="mailto:contact@kaapo.studio"
                                    className="btn btn-dark mt-20 d-flex align-items-center animsition-link"
                                >
                                    <span>{home.button}</span>
                                    <span className="fz-30 pe-7s-angle-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img mt-50">
                <img src="/assets/imgs/b2.jpg" alt="" />
            </div>
        </header>
    );
}

export default Header;
