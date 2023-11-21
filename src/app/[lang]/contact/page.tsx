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
import Header from '@/src/components/Kaapo/Contact/Header';
import Contact from '@/src/components/Kaapo/landing/Contact';
import Testimonials from '@/src/components/Kaapo/landing/Testimonials';
import Script from 'next/script';
import { Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import generateStylesheetObject from '@/src/common/generateStylesheetsObject';
import Form from '@/src/components/Kaapo/Contact/Form';
import Info from '@/src/components/Kaapo/Contact/Info';

export const metadata: Metadata = {
    title: 'Contact | Kaapo Studio',
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
export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
    const { navigation, footer, page } = await getDictionary(lang);
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
                        <Header contact={page.contact} />
                        <Form contact={page.contact} />
                        <Info contact={page.contact} />
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
