//= Global Styles
import '@/src/styles/globals.css';
import '@/src/styles/scss/style.scss';
import { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { i18n, Locale } from '@/i18n.config';
import generateStylesheetObject from '@/src/common/generateStylesheetsObject';
import { Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Kaapo Studio',
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

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

const nunitoSans = Nunito_Sans({
    variable: '--nunito',
    weight: ['300', '500', '700'],
    subsets: ['latin'],
});
export default function Root({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
    return (
        <html lang={params.lang}>
            <Head>
                <meta name="theme-color" content="#F2F2F2" />
                <link rel="apple-touch-icon" sizes="180x180" href="" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/assets/favicon/site.webmanifest" />
                {/*<link rel="alternate" type="application/rss+xml" href="/assets/feed/blog/feed.xml" />*/}
            </Head>
            <body className={nunitoSans.variable + ' main-bg'}>
                {children}
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
        </html>
    );
}
