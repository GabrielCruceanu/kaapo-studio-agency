'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Contact({ contact, lang }) {
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        if (window.innerWidth > 991) {
            gsap.set('.contact-container', { yPercent: -50 });
            const cover = gsap.timeline({ paused: true });
            cover.to('.contact-container', { yPercent: 0, ease: 'none' });

            ScrollTrigger.create({
                trigger: '.main-box',
                start: 'bottom bottom',
                end: '+=50%',
                animation: cover,
                scrub: true,
            });
        }
    }

    return (
        <section className="call-action section-padding bord-thin-bottom">
            <div className="contact-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <div className="mb-30">
                                    <span className="sub-title bord">{contact.subTitle}</span>
                                </div>
                                <h2 className="fz-70 f-bold text-u">{contact.description}</h2>
                                <Link
                                    href="mailto:contact@kaapo.studio"
                                    className="butn-circle animsition-link colorbg mt-30"
                                >
                                    <span>{contact.button}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
