import { FC, useState } from 'react';
import MainButton from '../../../../components/buttons/MainButton';
import { MouseParallaxContainer } from 'react-parallax-mouse';
import {
  HeroDesktopCircles,
  HeroMobileCircles,
} from './hero-circles/HeroCircles';
import './hero-section.scss';
import WaveShape from '../../../../components/shapes/Wave';
import { scrollToSection } from '../../../../utils/scroll.utils';
import { colorsConstants } from '../../../../models/constants/style.constant';

const HeroSection: FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const BUTTON_TEXT = 'Sprawdź ofertę!';

  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >
      <div className='hero-section'>
        <div className='hero-section__content'>
          <h2 className='hero-section__header'>
            Szkolenia psów metodą naturalną
          </h2>
          <MainButton
            className='hero-section__button'
            onClick={() => scrollToSection('offer')}
            content={BUTTON_TEXT}
          />
          <HeroMobileCircles />
        </div>
        <div className='hero-section__graphic-container'>
          {imageLoaded ? null : (
            <div className='hero-section__image-skeleton' />
          )}
          <img
            className='hero-section__image'
            src='src/assets/images/hero_dog.png'
            alt='Picture of dog'
            onLoad={() => setImageLoaded(true)}
            style={imageLoaded ? {} : { display: 'none' }}
            draggable='false'
          />
          <WaveShape
            className='hero-section__wave-shape'
            colorTop={colorsConstants.MOBILE_WAVE_COLORS[0]}
            colorBottom={colorsConstants.MOBILE_WAVE_COLORS[1]}
          />
          <HeroDesktopCircles />
        </div>
      </div>
    </MouseParallaxContainer>
  );
};

export default HeroSection;
