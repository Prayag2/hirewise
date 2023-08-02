import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Companies from "./sections/Companies.jsx";
import FAQ from "./sections/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  }
  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <Hero scrollToSection={scrollToSection}/>
      <About/>
      <HowItWorks/>
      <Testimonials/>
      <Companies/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
