import React from 'react';
//= Scripts
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/src/lib/dictionary';
//= Common Components
import Cursor from '@/src/components/Common/Cursor';
import LoadingScreen from '@/src/components/Common/Loader';
import ProgressScroll from '@/src/components/Common/ProgressScroll';
import Navbar from '@/src/components/Common/Navbar';
import Menu from '@/src/components/Common/Menu';
import Footer from '@/src/components/Common/Footer';
//= Page Components
import Header from '@/src/components/Kaapo/landing/Header';
import About from '@/src/components/Kaapo/landing/About';
import Services from '@/src/components/Kaapo/landing/Services';
import Testimonials from '@/src/components/Kaapo/landing/Testimonials';
import Portfolio from '@/src/components/Kaapo/landing/Portfolio';
import Contact from '@/src/components/Kaapo/landing/Contact';

export const metadata = {
    title: 'Kaapo Studio',
};

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
    const { navigation, footer, page } = await getDictionary(lang);
    return (
        <>
            <LoadingScreen />
            <Cursor />
            <ProgressScroll />

            <div id="smooth-wrapper">
                <Navbar borderBottom={false} lang={lang} />
                <Menu lang={lang} navigation={navigation} />
                <div id="smooth-content">
                    <main className="main-bg">
                        <div className="main-box main-bg onto min-vh-100">
                            <Header lang={lang} home={page.home} />
                            <About about={page.about} />
                            <Services services={page.services} />
                            <Portfolio portfolio={page.portfolio} />
                            <Testimonials testimonials={page.testimonials} brands={page.brands} />
                        </div>
                        <Contact contact={page.contact} lang={lang} />
                    </main>
                    <Footer subBg={true} footer={footer} />
                </div>
            </div>
        </>
    );
}
