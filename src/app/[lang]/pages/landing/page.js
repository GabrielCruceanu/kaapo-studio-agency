import Script from "next/script";
//= Scripts
import generateStylesheetObject from '../../../../common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "../../../../components/Common/Loader";
import Cursor from "../../../../components/Common/Cursor";
import ProgressScroll from "../../../../components/Common/ProgressScroll";
//= Page Components
import Navbar from "../../../../components/Common/Navbar";
import Menu from "../../../../components/Common/Menu";
import Header from "../../../../components/Landing/Header";
import About from "../../../../components/Landing/About";
import Works from "../../../../components/Landing/Works";
import Marquee from "../../../../components/Landing/Marquee";
import Brands from "../../../../components/Landing/Brands";
import Accordions from "../../../../components/Landing/Accordions";
import Blog from "../../../../components/Landing/Blog";
import Contact from "../../../../components/Landing/Contact";
import Footer1 from "../../../../components/Common/Footer1";

export const metadata = {
  title: 'Bayone - Landing',
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

export default function Landing() {
  return (
    <body className="landing">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <div className="main-box main-bg ontop">
              <Header />
              <About />
              <Works />
              <Marquee />
              <Brands />
              <Accordions />
              <Blog />
            </div>
            <Contact />
          </main>
          <Footer1 />
        </div>
      </div>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/TweenMax.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/charming.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
