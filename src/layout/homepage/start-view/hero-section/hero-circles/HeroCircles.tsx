import { FC } from 'react';
import HollowCircle from '../../../../../components/shapes/HollowCircle';
import './hero-circles.scss';
import { MouseParallaxChild } from 'react-parallax-mouse';
import { colorsConstants } from '../../../../../models/constants/style.constant';

export const HeroDesktopCircles: FC = () => {
  return (
    <>
      <MouseParallaxChild
        className='hero-circles__desktop'
        factorX={-0.1}
        factorY={-0.3}
      >
        <HollowCircle
          svgSize={110}
          cx={60}
          cy={60}
          radius={40}
          strokeWidth={20}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.6}
        />
      </MouseParallaxChild>
      <MouseParallaxChild
        className='hero-circles__desktop'
        factorX={0.1}
        factorY={0.1}
      >
        <HollowCircle
          svgSize={290}
          cx={150}
          cy={145}
          radius={120}
          strokeWidth={45}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.7}
        />
      </MouseParallaxChild>
      <MouseParallaxChild
        className='hero-circles__desktop'
        factorX={0.2}
        factorY={-0.3}
      >
        <HollowCircle
          svgSize={200}
          cx={100}
          cy={100}
          radius={70}
          strokeWidth={35}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.7}
        />
      </MouseParallaxChild>
    </>
  );
};

export const HeroMobileCircles: FC = () => {
  return (
    <>
      <MouseParallaxChild
        className='hero-circles__mobile'
        factorX={-0.1}
        factorY={-0.3}
      >
        <HollowCircle
          svgSize={110}
          cx={60}
          cy={60}
          radius={40}
          strokeWidth={20}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.3}
        />
      </MouseParallaxChild>
      <MouseParallaxChild
        className='hero-circles__mobile'
        factorX={0.1}
        factorY={0.1}
      >
        <HollowCircle
          svgSize={290}
          cx={145}
          cy={145}
          radius={120}
          strokeWidth={45}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.35}
        />
      </MouseParallaxChild>
      <MouseParallaxChild
        className='hero-circles__mobile'
        factorX={0.2}
        factorY={-0.3}
      >
        <HollowCircle
          svgSize={200}
          cx={100}
          cy={100}
          radius={70}
          strokeWidth={35}
          color={colorsConstants.HERO_CIRCLES_COLOR}
          opacity={0.35}
        />
      </MouseParallaxChild>
    </>
  );
};
