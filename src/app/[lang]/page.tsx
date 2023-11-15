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
    title: 'Kaapo Studio',
};

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
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
                            {/*<Header />*/}
                            {/*<About />*/}
                            {/*<Services />*/}
                            {/*<Works />*/}
                            {/*<Awards />*/}
                            {/*<Testimonials />*/}
                            {/*<Team />*/}
                        </div>
                        {/*<Contact />*/}
                    </main>
                    <Footer subBg={true} footer={footer} lang={lang} />
                </div>
            </div>
        </>
    );
}
