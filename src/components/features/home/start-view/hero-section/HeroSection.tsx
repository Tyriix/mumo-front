import { FC, RefObject } from 'react'
import './hero-section.scss'
import MainButton from '../../../../shared/buttons/MainButton'
import HollowCircle from '../../../../shared/shapes/HollowCircle'

interface Props {
  refOffer: RefObject<HTMLDivElement>
}

const HeroSection: FC<Props> = ({ refOffer }) => {
  const handleClick = () =>
    refOffer.current?.scrollIntoView({ behavior: 'smooth' })

  const BUTTON_TEXT = 'Sprawdź ofertę!'
  const CIRCLE_COLOR: string = '#8dd9cc'
  const CIRCLE_CLASS: string = 'about__image-circle'

  return (
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
      <div className="hero-section__graphic">
        <img src="src/assets/images/hero_dog.png" alt="Picture of dog" />
        <div className="circles">
          <HollowCircle
            className={CIRCLE_CLASS}
            svgSize={110}
            cx={60}
            cy={60}
            radius={40}
            strokeWidth={20}
            color={CIRCLE_COLOR}
            opacity={0.8}
          />
          <HollowCircle
            className={CIRCLE_CLASS}
            svgSize={240}
            cx={120}
            cy={120}
            radius={100}
            strokeWidth={40}
            color={CIRCLE_COLOR}
            opacity={0.8}
          />
          <HollowCircle
            className={CIRCLE_CLASS}
            svgSize={200}
            cx={100}
            cy={100}
            radius={70}
            strokeWidth={35}
            color={CIRCLE_COLOR}
            opacity={0.8}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
