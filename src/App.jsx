import { useState } from 'react'
import Guest from './Layout/Guest';

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
import ScrollEffect from './Components/ScrollEffect'
import ImageBackground from './Components/ImageBackground'



function App() {
  const [count, setCount] = useState(0);
  const velocity = 100; // Adjust the velocity as needed

  return (
    <Guest>
      {/* Scroll Effect */}
      {/* <ScrollEffect /> */}

      {/* <VideoBackground /> */}
      <ImageBackground />

      <LogoSlider />

      <AboutUsSection />

      {/* Rangkaian Acara */}
      <RangkaianAcaraSection />

      {/* Grand Summit */}
      <GrandSummitSection />

      {/* our events */}
      <OurEvents />

      {/* National Competition */}
      <FuturecompetitionSection />

      {/* portfolio */}
      <PortfolioSection />

      {/* Organization  */}
      <OrganizationsSection />

      {/* Sponsors */}
      <SponsorsSection />

    </Guest>
  )
}

export default App
