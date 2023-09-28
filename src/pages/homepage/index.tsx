import { FC } from 'react'
import HomeOfferSection from '../../components/features/home/offer/OfferSection'
import AboutSection from '../../components/features/home/about/AboutSection'

const Homepage: FC = () => {
  return (
    <>
      <h1>Main Page</h1>
      <AboutSection />
      <HomeOfferSection />
    </>
  )
}

export default Homepage
