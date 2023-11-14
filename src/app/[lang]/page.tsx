import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/src/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/src/components/Common/Loader";
import Cursor from "@/src/components/Common/Cursor";
import ProgressScroll from "@/src/components/Common/ProgressScroll";
//= Page Components
import Navigation from "@/src/components/Preview/Navigation";
import Header from "@/src/components/Preview/Header";
import Portfolio from "@/src/components/Preview/Portfolio";
import Footer from "@/src/components/Preview/Footer";
import HeaderLocale from "@/src/components/Common/Header-Locale";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/src/lib/dictionary";

export const metadata = {
  title: 'Kaapo Studio',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      '/assets/fonts/mona-sans/style.css',
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      '/landing-preview/css/preview-style.css'
    ])
  }
}

export default async function IndexPage({
                                            params: { lang },
                                        }: {
    params: { lang: Locale }
}) {
    const { page } = await getDictionary(lang)
    console.log('page', page)
  return (
      <section className='py-24'>
          <HeaderLocale lang={lang}/>
          <div className='container'>
              <h1 className='text-3xl font-bold'>{page.home.title}</h1>
              <p className='text-gray-500'>{page.home.description}</p>
          </div>
      </section>
    // <body className="main-bg">
    //   <LoadingScreen />
    //   <Cursor />
    //   <ProgressScroll />
    //
    //   <div id="smooth-wrapper">
    //     <div id="smooth-content">
    //       <Navigation />
    //       <main>
    //         <Header />
    //         <Portfolio />
    //       </main>
    //       <Footer />
    //     </div>
    //   </div>
    // </body>
  )
}
