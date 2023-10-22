import { FC, useRef } from 'react'
import HomeOfferSection from '../../layout/homepage/offer/OfferSection'
import AboutSection from '../../layout/homepage/about/AboutSection'
import StartViewSection from '../../layout/homepage/start-view/StartViewSection'
import ContactSection from '../../layout/homepage/contact/ContactSection'
import LoginSection from '../../layout/login/LoginSection'

const Homepage: FC = () => {
  const refOffer = useRef<HTMLDivElement>(null)

  return (
    <>
      <StartViewSection refOffer={refOffer} />
      <AboutSection />
      <HomeOfferSection ref={refOffer} />
      <ContactSection />
      <LoginSection />
    </>
  )
}

export default Homepage;
