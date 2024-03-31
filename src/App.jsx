import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skill/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={1.5}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />

      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
