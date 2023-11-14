import Script from "next/script";
//= Scripts
import generateStylesheetObject from '../../../../../common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "../../../../../components/Common/Loader";
import Cursor from "../../../../../components/Common/Cursor";
import ProgressScroll from "../../../../../components/Common/ProgressScroll";
//= Page Components
import Navbar from "../../../../../components/Common/Navbar";
import Menu from "../../../../../components/Common/Menu";
import Header from "../../../../../components/Portfolio/Header";
import FixedText from "../../../../../components/Portfolio/FixedText";
import Footer1 from "../../../../../components/Common/Footer1";

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
