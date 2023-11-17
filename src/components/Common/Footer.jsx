'use client';
import React, { useEffect } from 'react';

function Footer({ subBg, footer }) {
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        if (window.innerWidth > 991) {
            gsap.set('.footer-container', { yPercent: -50 });
            const uncover = gsap.timeline({ paused: true });
            uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

            ScrollTrigger.create({
                trigger: 'main',
                start: 'bottom bottom',
                end: '+=50%',
                animation: uncover,
                scrub: true,
            });
        }
    }

    return (
        <footer className={`${subBg ? 'sub-bg' : ''}`}>
            <div className="footer-container">
                <div className="container pb-80 pt-80 ontop">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="eml">
                                <h6 className="sub-title opacity-8">{footer.eml.title}</h6>
                                <h2 className="underline fz-60">
                                    <a href="mailto:contact@kaapo.studio">contact@kaapo.studio</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-80">
                        <div className="col-lg-3">
                            <div className="logo">
                                <img src="/assets/svg/brand/kaapo-studio-logo-wide.svg" alt="logo kaapo studio" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="column">
                                <h6 className="sub-title mb-30">Social Media</h6>
                                <ul className="rest">
                                    <li>
                                        <a href="https://www.linkedin.com/company/kaapo-studio/" target="_blank">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/kaapo.studio/" target="_blank">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/kaapo.studio/" target="_blank">
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="column">
                                <h6 className="sub-title mb-30">Contact</h6>
                                {/*<p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>*/}
                                <ul className="rest">
                                    <li>
                                        <a href="tel:+40746385038">+4 0746 385 038</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bord pt-30 pb-30 bord-thin-top">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="links">
                                <ul className="rest">
                                    <li className="mt-3 mt-md-0">
                                        <a
                                            href="https://anpc.ro/ce-este-sal/"
                                            target="_blank"
                                            className="animsition-link"
                                        >
                                            <img src="/assets/imgs/footer/sal.webp" alt="anpc" />
                                        </a>
                                    </li>
                                    <li className="mt-3 mt-md-0">
                                        <a
                                            href={`https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO`}
                                            target="_blank"
                                            className="animsition-link"
                                        >
                                            <img src="/assets/imgs/footer/sol.webp" alt="solutionarea online" />
                                        </a>
                                    </li>
                                    <li className="mt-3 mt-md-0">
                                        <a
                                            href="https://www.sortlist.com/agency/kaapo-studio"
                                            target="_blank"
                                            className="animsition-link"
                                        >
                                            <img
                                                src="/assets/svg/footer/badge-flag-blue-dark-xs.svg"
                                                alt="badge shortlist"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="copyright d-flex">
                                <div className="ml-auto">
                                    <p className="fz-13">
                                        © 2019-{new Date().getFullYear()}{' '}
                                        <span className="underline">
                                            <a href="https://kaapo.studio" target="_blank">
                                                Kaapo.Studio™
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
