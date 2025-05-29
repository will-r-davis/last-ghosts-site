// import { useState } from 'react's
import './App.css'
import News from './components/News'
import HeroSection from './components/HeroSection'

function App() 
{
  return (
    <>
      <div>
        <HeroSection/>
        <News/>
        <footer className="footer">
          <p>&copy; 2025 Last Ghosts. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
