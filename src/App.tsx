// import "./styles/variables.css";

import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data/portfolio";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={portfolioData.hero} />
        <hr className="section-divider" />
        <About data={portfolioData.about} />
        <hr className="section-divider" />
        <Experience data={portfolioData.experience} />
        <hr className="section-divider" />
        <Skills data={portfolioData.skills} />
        <hr className="section-divider" />
        <Projects data={portfolioData.projects} />
        <hr className="section-divider" />
        <Certifications data={portfolioData.certifications} />
        <hr className="section-divider" />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
