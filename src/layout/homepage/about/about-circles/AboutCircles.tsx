import HollowCircle from '../../../../components/shapes/HollowCircle';
import { colorsConstants } from '../../../../models/constants/style.constant';

const CIRCLE_CLASS: string = 'about__image-circle';

export const CirclesFirst = () => {
  return (
    <div className='about__image-circles'>
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={43}
        cx={20}
        cy={20}
        radius={15}
        strokeWidth={8}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
        opacity={0.8}
      />
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={75}
        cx={37}
        cy={37}
        radius={29}
        strokeWidth={15}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
      />
    </div>
  );
};

export const CirclesSecond = () => {
  return (
    <div className='about__image-circles'>
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={45}
        cx={21}
        cy={21}
        radius={17}
        strokeWidth={9}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
        opacity={0.7}
      />
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={0}
        cx={21}
        cy={21}
        radius={17}
        strokeWidth={9}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
        opacity={0.6}
      />
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={0}
        cx={37}
        cy={37}
        radius={29}
        strokeWidth={15}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
      />
    </div>
  );
};
export const CirclesThird = () => {
  return (
    <div className='about__image-circles'>
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={45}
        cx={22}
        cy={22}
        radius={17}
        strokeWidth={9}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
        opacity={0.7}
      />
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={0}
        cx={24}
        cy={24}
        radius={19}
        strokeWidth={10}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
        opacity={0.8}
      />
      <HollowCircle
        className={CIRCLE_CLASS}
        svgSize={0}
        cx={37}
        cy={37}
        radius={29}
        strokeWidth={15}
        color={colorsConstants.ABOUT_CIRCLES_COLOR}
      />
    </div>
  );
};
