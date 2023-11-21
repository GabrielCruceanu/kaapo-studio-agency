//= Global Styles
import '@/src/styles/globals.css';
import '@/src/styles/scss/style.scss';
import { Metadata } from 'next';
import React from 'react';
import { i18n, Locale } from '@/i18n.config';
import generateStylesheetObject from '@/src/common/generateStylesheetsObject';

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

export default function Root({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
    return <html lang={params.lang}>{children}</html>;
}
