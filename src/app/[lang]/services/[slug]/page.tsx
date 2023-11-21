import React from 'react';
//= Scripts
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/src/lib/dictionary'; //= Common Components
import Cursor from '@/src/components/Common/Cursor';
import LoadingScreen from '@/src/components/Common/Loader';
import ProgressScroll from '@/src/components/Common/ProgressScroll';
import Navbar from '@/src/components/Common/Navbar';
import Menu from '@/src/components/Common/Menu';
import Footer from '@/src/components/Common/Footer'; //= Page Components
import Header from '@/src/components/Kaapo/service/Header';
import Contact from '@/src/components/Kaapo/landing/Contact';
import Testimonials from '@/src/components/Kaapo/landing/Testimonials';
import Script from 'next/script';
import { Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import generateStylesheetObject from '@/src/common/generateStylesheetsObject';

export const metadata: Metadata = {
    title: 'Service | Kaapo Studio',
    keywords: ['Web design', 'Web development', 'Seo'],
    authors: [{ url: 'https://kaapo.studio', name: 'Kaapo Studio' }],
    description:
        'With over 7 years of experience in web and mobile app design, project strategy, web development, performance optimization, and maintenance & support, we are here to bring your digital vision to life.', // email: 'contact@kaapo.studio',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000'),
    icons: {
        icon: '/assets/favicon/favicon.ico',
        shortcut: '/assets/favicon/favicon.ico',
        apple: '/assets/favicon/apple-touch-icon.png',

        other: generateStylesheetObject(['/assets/css/plugins.css']),
    },
};
const nunitoSans = Nunito_Sans({
    variable: '--nunito',
    weight: ['200', '300', '400', '500', '700', '800', '900'],
    subsets: ['latin'],
});
export default async function ServicePage({ params: { lang, slug } }: { params: { lang: Locale; slug: string } }) {
    const { navigation, footer, page } = await getDictionary(lang);

    const service = page.services.list.find((service) => service.slug === slug);
    return (
        <body className={nunitoSans.variable + ' main-bg'}>
            <LoadingScreen />
            <Cursor />
            <ProgressScroll />
            <div id="smooth-wrapper">
                <Navbar borderBottom={false} lang={lang} />
                <Menu lang={lang} navigation={navigation} />
                <div id="smooth-content">
                    <main className="main-bg">
                        <div className="main-box main-bg onto min-vh-100">
                            <Header service={service} />

                            <section className="section-padding bord-thin-top">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="text">
                                                <h5 className="mb-30 fw-400">{service?.description}</h5>
                                                <h5 className="fw-400">{lang === 'ro' ? 'Beneficii' : 'Benefits'}:</h5>
                                                <ul>
                                                    {service?.benefits.map((benefit, index) => (
                                                        <li key={index}>
                                                            <p className="fz-18">{benefit}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <Testimonials testimonials={page.testimonials} brands={page.brands} />
                        </div>
                        <Contact contact={page.contact} lang={lang} />
                    </main>
                    <Footer subBg={true} footer={footer} />
                </div>
            </div>
            <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
            <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
            <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
            <Analytics />
        </body>
    );
}

export async function generateStaticParams({ params: { lang } }: { params: { lang: Locale } }) {
    const { page } = await getDictionary(lang);
    return page.services.list.map((service) => {
        service.slug;
    });
}
