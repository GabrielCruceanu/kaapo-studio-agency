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
import Header from "../../../../../components/About/Header";
import Intro from "../../../../../components/About/Intro";
import Video from "../../../../../components/About/Video";
import Team from "../../../../../components/About/Team";
import Testimonials from "../../../../../components/About/Testimonials";
import Footer1 from "../../../../../components/Common/Footer1";

export const metadata = {
  title: 'Bayone - About',
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

export default function About() {
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
            <Intro />
            <Video />
            <Team />
            <Testimonials />
          </main>
          <Footer1 subBg />
        </div>
      </div>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
