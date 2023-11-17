import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <header className="crev-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="caption text-center">
                            <h1>
                                Transformă Viziunea Ta Digitală în Realitate
                                {/*<span className="f-ultra-light">Creative</span> Digital Agency*/}
                            </h1>
                        </div>
                        <div className="caption text-center mt-20">
                            <p>De la Concept la Creare: Soluții Web Personalizate pentru Afacerea Ta</p>
                            <div className="d-flex align-items-center justify-content-center ">
                                <Link
                                    href="/contact"
                                    className="btn btn-dark mt-15 d-flex align-items-center animsition-link"
                                >
                                    <span> Obține Consultație Gratuită</span>
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
