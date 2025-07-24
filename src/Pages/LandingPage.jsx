import React from 'react'
import Guest from '../Layout/Guest'


import ImageBackground from '../Components/ImageBackground'
import LogoSlider from '../Sections/LogoSlider';
import AboutUsSection from '../Sections/AboutUsSection';
import RangkaianAcaraSection from '../Sections/RangkaianAcaraSection';
import GrandSummitSection from '../Sections/GrandSummitSection';
import OurEvents from '../Sections/OurEvents';
import FuturecompetitionSection from '../Sections/FuturecompetitionSection';
import PortfolioSection from '../Sections/PortfolioSection';
import OrganizationsSection from '../Sections/OrganizationsSection';
import SponsorsSection from '../Sections/SponsorsSection';


const LandingPage = () => {
  return (

    <Guest>

      {/* Hero */}
      <ImageBackground />

      {/* Brand Carouse; */}
      <LogoSlider />

      <AboutUsSection />

      <RangkaianAcaraSection />

      <GrandSummitSection />

      <OurEvents />

      <FuturecompetitionSection />

      <PortfolioSection />

      <OrganizationsSection />

      <SponsorsSection />

    </Guest>

  )
}

export default LandingPage