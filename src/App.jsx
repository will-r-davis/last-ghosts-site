// import { useState } from 'react's
import { useState, useRef, useEffect } from 'react';
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import ScheduleSection from './components/ScheduleSection';
import EPKSection from './components/EPKSection';
import ContactSection from './components/ContactSection';

function App() {
  // Importing sections

  // State to manage the selected section
  // const [selectedSection, setSelectedSection] = useState(null);
const [selectedSection, setSelectedSection] = useState(null);
const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedSection && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSection]);

  return (
    <>
      <div>
        <HeroSection onNavClick={setSelectedSection}/>
        {/* {renderSection()} */}
        {selectedSection == 'about' && <div ref={sectionRef}> <AboutSection /></div>}
        {selectedSection == 'music' && <div ref={sectionRef}> <MusicSection /></div>}
        {selectedSection == 'schedule' && <div ref={sectionRef}> <ScheduleSection /></div>}
        {selectedSection == 'epk' && <div ref={sectionRef}> <EPKSection /></div>}
        {selectedSection == 'contact' && <div ref={sectionRef}> <ContactSection /></div>}
        <footer className="footer" style={{ textAlign: 'center', background: '#222', color: '#f7f7fa', padding: '1px 0' }}>
          <p>&copy; 2025 Last Ghosts. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
