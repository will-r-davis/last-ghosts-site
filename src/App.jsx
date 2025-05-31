// import { useState } from 'react's
import './App.css'
import News from './components/News'
import HeroSection from './components/HeroSection'
import AnimatedOutlineButton from './components/AnimatedOutlineButton'

function App() 
{
  return (
    <>
      <div>
        <HeroSection/>
        <News/>
        <AnimatedOutlineButton onClick={() => alert('Button Clicked!')}>
          Click Me  
        </AnimatedOutlineButton>
        <footer className="footer">
          <p>&copy; 2025 Last Ghosts. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
