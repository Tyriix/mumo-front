import { FC, RefObject } from 'react'
import MainButton from '../../../../shared/buttons/MainButton'
import { MouseParallaxContainer } from 'react-parallax-mouse'
import { HeroDesktopCircles } from './hero-circles/HeroCircles'
import './hero-section.scss'

interface Props {
  refOffer: RefObject<HTMLDivElement>
}

const HeroSection: FC<Props> = ({ refOffer }) => {
  const handleClick = () =>
    refOffer.current?.scrollIntoView({ behavior: 'smooth' })

  const BUTTON_TEXT = 'Sprawdź ofertę!'

  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >
      <div className="hero-section">
        <div className="hero-section__content">
          <h2 className="hero-section__header">
            Szkolenia psów metodą naturalną
          </h2>
          <MainButton
            className="hero-section__button"
            onClick={handleClick}
            content={BUTTON_TEXT}
          />
        </div>
        <div className="hero-section__graphic-container">
          <img
            className="hero-section__image"
            src="src/assets/images/hero_dog.png"
            alt="Picture of dog"
          />
          <HeroDesktopCircles />
        </div>
      </div>
    </MouseParallaxContainer>
  )
}

export default HeroSection
