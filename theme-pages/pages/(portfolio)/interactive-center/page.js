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
import InteractiveCenter from "../../../../src/components/Portfolio/InteractiveCenter";

export const metadata = {
  title: 'Bayone - Portfolio Interactive Center',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      '/assets/fonts/mona-sans/style.css',
      '/assets/css/plugins.css',
      '/assets/css/base.css',
      '/assets/css/style.css'
    ])
  }
}

export default function PortfolioInteractiveCenterPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu />
      <InteractiveCenter />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
