//= Global Styles
import '@/src/styles/globals.css';
import { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { i18n, Locale } from '@/i18n.config';

export const metadata: Metadata = {
    title: 'Kaapo Studio',
    keywords: ['Web design', 'Web development', 'Seo'],
    authors: [{ url: 'https://kaapo.studio', name: 'Kaapo Studio' }], // siteName: 'Kaapo Studio',
    // defaultTitle: 'Kaapo Studio',
    // titleTemplate: ' %s | Kaapo Studio',
    description:
        'With over 7 years of experience in web and mobile app design, project strategy, web development, performance optimization, and maintenance & support, we are here to bring your digital vision to life.', // email: 'contact@kaapo.studio',
    icons: {
        icon: '/assets/imgs/favicon.ico',
        shortcut: '/assets/imgs/favicon.ico',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000'),
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
    return (
        <html lang={params.lang}>
            <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
            <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
            <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
            <body>{children}</body>
        </html>
    );
}
