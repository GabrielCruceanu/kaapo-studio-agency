import Script from "next/script";
//= Scripts
import generateStylesheetObject from '../../../src/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "../../../src/components/Common/Loader";
import Cursor from "../../../src/components/Common/Cursor";
import ProgressScroll from "../../../src/components/Common/ProgressScroll";
//= Page Components
import Navbar from "../../../src/components/Common/Navbar";
import Menu from "../../../src/components/Common/Menu";
import Header from "../../../src/components/CreativePortfolio/Header";
import Marquee from "../../../src/components/CreativePortfolio/Marquee";
import About from "../../../src/components/CreativePortfolio/About";
import Services from "../../../src/components/CreativePortfolio/Services";
import Works from "../../../src/components/CreativePortfolio/Works";
import Testimonials from "../../../src/components/CreativePortfolio/Testimonials";
import Blog from "../../../src/components/CreativePortfolio/Blog";
import Contact from "../../../src/components/CreativePortfolio/Contact";
import Footer from "../../../src/components/Common/Footer2";

export const metadata = {
  title: 'Bayone - Creative Portfolio',
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

export default function CreativePortfolio() {
  return (
    <body className="crev-portfolio">
      <LoadingScreen />
      <Cursor />
      <div className="noise"></div>
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar borderBottom />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <div className="main-box main-bg ontop">
              <Header />
              <Marquee />
              <About />
              <Services />
              <Works />
              <Testimonials />
              <Blog />
            </div>
            <Contact />
          </main>
          <Footer />
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
