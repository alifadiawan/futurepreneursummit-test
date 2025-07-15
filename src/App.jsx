import { useState } from 'react'
import Guest from './Layout/Guest';
import bgImage from './assets/blurry-gradient-haikei.png';
import logo from './assets/Logo-FEST-LIGHT.png';
import Home from './Pages/Home';
import AboutUs from './Components/AboutUs';
import ScrollVelocity from './Components/ScrollVelocity';
import ImageCarousel from './Components/ImageCarousel';

function App() {
  const [count, setCount] = useState(0);
  const velocity = 100; // Adjust the velocity as needed

  return (
    <Guest>
      <Home />
      <AboutUs />
      <ImageCarousel speed={6}/>

    </Guest>
  )
}

export default App
