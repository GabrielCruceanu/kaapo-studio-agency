//= Global Styles
import "@/src/styles/globals.css";
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
    <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/plugins.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/wow.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/js/smoother-script.js" strategy="lazyOnload"/>
    <Script src="/assets/js/scripts.js" strategy="lazyOnload"/>
    </body>
    </html>)
}
