import HollowCircle from '../../../../../shared/shapes/HollowCircle'
import './hero-circles.scss'
import {
  MouseParallaxChild,
} from 'react-parallax-mouse'

const CIRCLE_COLOR: string = '#70cabb'
const CIRCLE_CLASS: string = 'about__image-circle'

export const HeroDesktopCircles = () => {
  return (
    <>
      <MouseParallaxChild
        className={CIRCLE_CLASS}
        factorX={-0.1}
        factorY={-0.3}
      >
        <HollowCircle
          svgSize={110}
          cx={60}
          cy={60}
          radius={40}
          strokeWidth={20}
          color={CIRCLE_COLOR}
          opacity={0.8}
        />
      </MouseParallaxChild>
      <MouseParallaxChild className={CIRCLE_CLASS} factorX={0.1} factorY={0.1}>
        <HollowCircle
          svgSize={290}
          cx={150}
          cy={145}
          radius={120}
          strokeWidth={45}
          color={CIRCLE_COLOR}
          opacity={0.8}
        />
      </MouseParallaxChild>
      <MouseParallaxChild className={CIRCLE_CLASS} factorX={0.2} factorY={-0.3}>
        <HollowCircle
          svgSize={200}
          cx={100}
          cy={100}
          radius={70}
          strokeWidth={35}
          color={CIRCLE_COLOR}
          opacity={0.8}
        />
      </MouseParallaxChild>
    </>
  )
}
