import { FC, RefObject, useState } from 'react'
import MainButton from '../../../../components/buttons/MainButton'
import { MouseParallaxContainer } from 'react-parallax-mouse'
import {
  HeroDesktopCircles,
  HeroMobileCircles,
} from './hero-circles/HeroCircles'
import './hero-section.scss'
import WaveShape from '../../../../components/shapes/Wave'

interface Props {
  refOffer: RefObject<HTMLDivElement>
}

const HeroSection: FC<Props> = ({ refOffer }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleClick = () =>
    refOffer.current?.scrollIntoView({ behavior: 'smooth' })

  const BUTTON_TEXT = 'Sprawdź ofertę!'
  const WAVE_COLORS = ['#7be5d5', '#21aa96']

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
          <HeroMobileCircles />
        </div>
        <div className="hero-section__graphic-container">
          {imageLoaded ? null : (
            <div className="hero-section__image-skeleton" />
          )}
          <img
            className="hero-section__image"
            src="src/assets/images/hero_dog.png"
            alt="Picture of dog"
            onLoad={() => setImageLoaded(true)}
            style={imageLoaded ? {} : { display: 'none' }}
            draggable="false"
          />
          <WaveShape
            className="hero-section__wave-shape"
            colorTop={WAVE_COLORS[0]}
            colorBottom={WAVE_COLORS[1]}
          />
          <HeroDesktopCircles />
        </div>
      </div>
    </MouseParallaxContainer>
  )
}

export default HeroSection
