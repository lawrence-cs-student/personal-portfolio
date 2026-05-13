import HeroSection from "./section/HeroSection"
import SkillSection from "./section/SkillSection"
import ProjectSection from "./section/ProjectSection";
import ContactSection from "./section/ContactSection";
import FooterSection from "./section/FooterSection";
import Navbar from "./components/Navbar";
import './index.css'
import 'devicon/devicon.min.css';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default App
