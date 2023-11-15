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
import Header from "../../../../src/components/Contact/Header";
import Info from "../../../../src/components/Contact/Info";
import Form from "../../../../src/components/Contact/Form";
import Footer1 from "../../../../src/components/Common/Footer1";

export const metadata = {
  title: 'Bayone - Contact',
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

export default function ContactPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <Info />
            <Form />
          </main>
          <Footer1 subBg />
        </div>
      </div>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
