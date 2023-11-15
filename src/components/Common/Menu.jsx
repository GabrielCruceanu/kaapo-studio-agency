'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';

function Menu({ lang, navigation }) {
    function closeMenu() {
        document.querySelector('.hamenu').classList.remove('open');
    }

    function handleMouseEnter(event) {
        Object.values(event.currentTarget.parentElement.children).forEach((el) => (el.style.opacity = '0.5'));
        event.currentTarget.style.opacity = '1';
    }

    function handleMouseLeave(event) {
        Object.values(event.currentTarget.parentElement.children).forEach((el) => (el.style.opacity = '1'));
    }

    function handleOpenDMenu(event) {
        document.querySelector('.main-menu').classList.add('gosub');
        event.currentTarget.parentElement.parentElement.querySelector('.sub-menu').classList.add('sub-open');
    }

    function handleCloseDMenu() {
        document.querySelector('.main-menu').classList.remove('gosub');
        document.querySelector('.main-menu .sub-menu').classList.remove('sub-open');
    }

    const pathName = usePathname();

    const redirectedPathName = (locale) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    return (
        <div className="hamenu valign">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="menu-links">
                            <ul className="main-menu rest">
                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="o-hidden">
                                        <Link href={`/${lang}`} className="link animsition-link" onClick={closeMenu}>
                                            <span className="nm">01.</span>
                                            {navigation.mainMenu.home}
                                        </Link>
                                    </div>
                                </li>

                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="o-hidden">
                                        <span className="link dmenu" onClick={handleOpenDMenu}>
                                            <span className="nm">02.</span>
                                            {navigation.mainMenu.services.name}{' '}
                                        </span>
                                    </div>
                                    <div className="sub-menu">
                                        <ul className="rest">
                                            <li>
                                                <div className="o-hidden">
                                                    <span className="sub-link back" onClick={handleCloseDMenu}>
                                                        <i className="pe-7s-angle-left"></i> {navigation.mainMenu.back}
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        {navigation.mainMenu.services.types.map((type, index) => (
                                            <ul className="rest" key={index}>
                                                <li>
                                                    <div className="o-hidden">
                                                        <Link
                                                            href={`/${lang}/services/${type.url}`}
                                                            className="sub-link animsition-link"
                                                            onClick={closeMenu}
                                                        >
                                                            {type.name}
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </li>

                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="o-hidden">
                                        <Link
                                            href={`/${lang}/about`}
                                            className="link animsition-link"
                                            onClick={closeMenu}
                                        >
                                            <span className="nm">03.</span>
                                            {navigation.mainMenu.about}
                                        </Link>
                                    </div>
                                </li>

                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="o-hidden">
                                        <Link
                                            href={`/${lang}/portfolio`}
                                            className="link animsition-link"
                                            onClick={closeMenu}
                                        >
                                            <span className="nm">04.</span>
                                            {navigation.mainMenu.portfolio}
                                        </Link>
                                    </div>
                                </li>

                                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="o-hidden">
                                        <Link
                                            href={`/${lang}/contact`}
                                            className="link animsition-link"
                                            onClick={closeMenu}
                                        >
                                            <span className="nm">05.</span>
                                            {navigation.mainMenu.contact}
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 valign">
                        <div className="cont-info">
                            <div className="item mb-50 md-hide">
                                <h6 className="text-u fw-600 mb-20">{navigation.contactInfo.base.name}</h6>
                                <p className="fw-400 fz-18">
                                    {navigation.contactInfo.base.street}, {navigation.contactInfo.base.district},{' '}
                                    {navigation.contactInfo.base.country}
                                </p>
                            </div>
                            <div className="item mb-50 md-hide">
                                <h6 className="text-u fw-600 mb-20">{navigation.contactInfo.connect.name}</h6>
                                <p>
                                    <a href="tel:+40746385038" className="fw-400 fz-18">
                                        {navigation.contactInfo.connect.phoneNumber}
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:contact@kaapo.studio" className="fw-400 fz-18">
                                        {navigation.contactInfo.connect.email}
                                    </a>
                                </p>
                            </div>
                            <div className="bottom mb-50 md-hide">
                                <h6 className="text-u fw-600 mb-20">{navigation.contactInfo.follow.name}</h6>
                                <ul className="rest social-text d-flex fz-13">
                                    <li className="mr-20">
                                        <a href="https://www.linkedin.com/company/kaapo-studio/" className="hover-this">
                                            <span className="hover-anim">LinkedIn</span>
                                        </a>
                                    </li>
                                    <li className="mr-20">
                                        <a href="https://www.facebook.com/kaapo.studio/" className="hover-this">
                                            <span className="hover-anim">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/kaapo.studio/" className="hover-this">
                                            <span className="hover-anim">Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <hr className="d-block d-lg-none  mt-3 mb-4" />

                            <div className="bottom">
                                <h6 className="text-u fw-600 mb-20">{navigation.contactInfo.language.name}</h6>
                                <ul className="rest social-text d-flex fz-15">
                                    {i18n.locales.map((locale) => {
                                        return (
                                            <li key={locale} className="mr-20">
                                                <Link href={redirectedPathName(locale)} className="hover-this">
                                                    <span className="hover-anim">{locale}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
