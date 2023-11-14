//= Global Styles
import "@/styles/globals.css";
import {Metadata} from "next";
import React from "react";
import Script from "next/script";
import {i18n, Locale} from "@/i18n.config";

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}
export default function Root({
                                 children, params,
                             }: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    return (<html lang={params.lang}>
    <body>
    {children}
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/plugins.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/wow.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/gsap.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/smoother-script.js" strategy="lazyOnload"/>
    <Script src="https://bayone-nextjs.themescamp.com/assets/js/scripts.js" strategy="lazyOnload"/>
    </body>
    </html>)
}
