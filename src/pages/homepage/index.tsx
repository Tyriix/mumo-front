import { FC } from 'react'
import HomeOfferSection from '../../components/features/home/offer/OfferSection'
import AboutSection from '../../components/features/home/about/AboutSection'
import StartViewSection from '../../components/features/home/start-view/StartViewSection'

const Homepage: FC = () => {
  return (
    <>
      <StartViewSection />
      <AboutSection />
      <HomeOfferSection />
    </>
  )
}

export default Homepage
