import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPanel from "./panels/AboutPanel";
import SkillsPanel from "./panels/SkillsPanel";
import Projects from "./panels/Projects";
import Certificates from "./panels/Certificates";
import Education from "./panels/Education";
import Contact from "./panels/Contact";

function App() {
  const [activePanel, setActivePanel] = useState(null);

  const openPanel = (panel) => {
    setActivePanel(panel);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      <Navbar openPanel={openPanel} />

      <Hero openPanel={openPanel} />

      {/* Popup will come here */}
      {activePanel === "about" && (
        <AboutPanel closePanel={closePanel} />
        )}
      {activePanel === "skills" && (
        <SkillsPanel closePanel={closePanel} />
        )}
      {activePanel === "projects" && (
        <Projects closePanel={closePanel} />
        )}
      {activePanel === "education" && (
        <Education closePanel={closePanel} />
        )}
      {activePanel === "certificates" && (
        <Certificates closePanel={closePanel} />
        )}
      {activePanel === "contact" && (
        <Contact closePanel={closePanel} />
        )}

    </div>
  );
}

export default App;