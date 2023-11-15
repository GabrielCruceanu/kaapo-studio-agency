import React from 'react';
//= Scripts
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
//= Common Components
import Cursor from '@/src/components/Common/Cursor';
import ProgressScroll from '@/src/components/Common/ProgressScroll';
import Navbar from '@/src/components/Common/Navbar';
import Menu from '@/src/components/Common/Menu';
import Footer from '@/src/components/Common/Footer';
//= Page Components

export const metadata = {
    title: 'About | Kaapo Studio',
};

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
    const { page, navigation, footer } = await getDictionary(lang);
    return (
        <>
            <Cursor />
            <ProgressScroll />

            <div id="smooth-wrapper">
                <Navbar borderBottom={false} lang={lang} />
                <Menu lang={lang} navigation={navigation} />
                <div id="smooth-content">
                    <main className="main-bg">
                        <div className="main-box main-bg onto min-vh-100">
                            <section className="py-24">
                                <div className="container">
                                    <h1 className="text-3xl font-bold">{page.about.title}</h1>
                                    <p className="text-gray-500">{page.about.description}</p>
                                </div>
                            </section>
                        </div>
                    </main>
                    <Footer subBg={true} footer={footer} />
                </div>
            </div>
        </>
    );
}
