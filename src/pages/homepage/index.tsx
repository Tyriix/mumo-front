import { FC, useRef } from 'react'
import HomeOfferSection from '../../components/features/home/offer/OfferSection'
import AboutSection from '../../components/features/home/about/AboutSection'
import StartViewSection from '../../components/features/home/start-view/StartViewSection'
import ContactSection from '../../components/features/home/contact/ContactSection'

const Homepage: FC = () => {
  const refOffer = useRef<HTMLDivElement>(null)

  return (
    <>
      <StartViewSection refOffer={refOffer} />
      <AboutSection />
      <HomeOfferSection ref={refOffer} />
      <ContactSection />
    </>
  )
}

export default Homepage