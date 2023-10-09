import { FC, useRef } from 'react'
import HomeOfferSection from '../../components/features/home/offer/OfferSection'
import AboutSection from '../../components/features/home/about/AboutSection'
import StartViewSection from '../../components/features/home/start-view/StartViewSection'

const Homepage: FC = () => {
  const refOffer = useRef<HTMLDivElement>(null)

  return (
    <>
      <StartViewSection refOffer={refOffer} />
      <AboutSection />
      <HomeOfferSection ref={refOffer} />
    </>
  )
}

export default Homepage
