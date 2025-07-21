import { useState } from 'react'
import Guest from './Layout/Guest';
import logo from './assets/Logo-FEST-LIGHT.png';
import Home from './Pages/Home';
import AboutUs from './Components/AboutUs';
import ScrollVelocity from './Components/ScrollVelocity';
import ImageCarousel from './Components/ImageCarousel';

import VideoBackground from './Sections/VideoBackground';
import LogoSlider from './Sections/LogoSlider'
import AboutUsSection from './Sections/AboutUsSection'
import PortfolioSection from './Sections/PortfolioSection';
import FuturecompetitionSection from './Sections/FuturecompetitionSection';
import SponsorsSection from './Sections/SponsorsSection';
import OrganizationsSection from './Sections/OrganizationsSection';
import RangkaianAcaraSection from './Sections/RangkaianAcaraSection'
import GrandSummitSection from './Sections/GrandSummitSection'
import OurEvents from './Sections/OurEvents'



function App() {
  const [count, setCount] = useState(0);
  const velocity = 100; // Adjust the velocity as needed

  return (
    <Guest>

      <VideoBackground />

      <LogoSlider />

      <AboutUsSection />

      {/* Rangkaian Acara */}
      <RangkaianAcaraSection />

      {/* Grand Summit */}
      <GrandSummitSection />

      {/* Sponsors */}
      <SponsorsSection />

      {/* our events */}
      <OurEvents />

      {/* National Competition */}
      <FuturecompetitionSection />

      {/* portfolio */}
      <PortfolioSection />

      {/* Organization  */}
      <OrganizationsSection />

    </Guest>
  )
}

export default App
