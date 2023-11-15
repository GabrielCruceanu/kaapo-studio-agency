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
import InteractiveFull from "../../../../src/components/Portfolio/InteractiveFull";

export const metadata = {
  title: 'Bayone - Portfolio Interactive Full',
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

export default function PortfolioInteractiveFullPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu />
      <InteractiveFull />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}