import './App.css';
import ScrollToTop from "react-scroll-to-top";
import scrollTopSvg from "./assets/images/arrow-up-circle-fill.svg"

// components
import Head from './components/Head';
import Services from './components/Services';
import About from './components/About';
import Photography from './components/Photography';
import Reviewslider from "./components/Reviewslider";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <>
      <Head />
      <Services />
      <About />
      <Photography />
      <Reviewslider />
      <BlogPosts />

      <ScrollToTop width='300px' height='300px' smooth={true} top={200} svgPath="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z" />
    </>
  );
}

export default App;
