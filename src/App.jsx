import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // Honor the OS "reduce motion" setting for every Framer animation.
    <MotionConfig reducedMotion="user">
    <div className="bg-[#080808]">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </main>

      <Footer />

    </div>
    </MotionConfig>
  );
}

export default App;