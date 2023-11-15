import Script from "next/script";
//= Scripts
import generateStylesheetObject from '../../../../src/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "../../../../src/components/Common/Loader";
import Cursor from "../../../../src/components/Common/Cursor";
import ProgressScroll from "../../../../src/components/Common/ProgressScroll";
//= Page Components
import Navbar from "../../../../src/components/Common/Navbar";
import Menu from "../../../../src/components/Common/Menu";
import Header from "../../../../src/components/Portfolio/Header";
import FixedText from "../../../../src/components/Portfolio/FixedText";
import Footer1 from "../../../../src/components/Common/Footer1";

export const metadata = {
  title: 'Bayone - Portfolio Fixed Text',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      '/assets/fonts/mona-sans/style.css',
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export default function PortfolioFixedTextPage() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu />
      <main className="main-bg">
        <Header isCenter />
        <FixedText />
      </main>
      <Footer1 subBg />


      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
