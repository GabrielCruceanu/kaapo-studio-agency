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
import CarouselSlider from "../../../../../components/Portfolio/CarouselSlider";

export const metadata = {
  title: 'Bayone - Portfolio Carousel Slider',
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

export default function PortfolioCarouselSliderPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu />
      <CarouselSlider />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
