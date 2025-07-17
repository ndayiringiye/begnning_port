import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./Components/ThemeToggle";

const App = () => {
  return (
    <BrowserRouter>
        <div className="bg-light dark:bg-secondary transition-colors duration-300 min-h-screen w-11/12 mx-auto">
          <Header />
          <Home />
          <About />
          <Experience />
          <Services />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
    </BrowserRouter>
  );
};

export default App;