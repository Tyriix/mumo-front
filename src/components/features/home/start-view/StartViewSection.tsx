import { FC, RefObject } from 'react'
import WelcomeText from './welcome-text/WelcomeText'
import HeroSection from './hero-section/HeroSection'

interface Props {
  refOffer: RefObject<HTMLDivElement>
}

const StartViewSection: FC<Props> = ({ refOffer }) => {
  return (
    <div className="start-view">
      <HeroSection refOffer={refOffer} />
      <WelcomeText />
    </div>
  )
}

export default StartViewSection
