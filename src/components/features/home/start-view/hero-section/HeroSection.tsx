import { FC, RefObject } from 'react'
import './hero-section.scss'
import MainButton from '../../../../shared/buttons/MainButton'

interface Props {
  refOffer: RefObject<HTMLDivElement>
}

const HeroSection: FC<Props> = ({ refOffer }) => {
  const handleClick = () =>
    refOffer.current?.scrollIntoView({ behavior: 'smooth' })

  const BUTTON_TEXT = 'Sprawdź ofertę!'

  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <h2>Szkolenia psów metodą naturalną</h2>
        <MainButton
          className="hero-section__button"
          onClick={handleClick}
          content={BUTTON_TEXT}
        />
      </div>
      <div className="hero-section__graphic">
        <img src="src/assets/images/hero_dog.png" alt="Picture of dog" />
      </div>
    </div>
  )
}

export default HeroSection
