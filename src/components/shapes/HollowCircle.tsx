import { FC } from 'react';

interface Props {
  cx: number;
  cy: number;
  className?: string;
  radius: number;
  strokeWidth?: number;
  color: string;
  svgSize: number;
  opacity?: number;
}

const HollowCircle: FC<Props> = ({
  cx,
  cy,
  className,
  radius,
  strokeWidth,
  color,
  svgSize,
  opacity,
}) => {
  return (
    <svg
      className={`${className}`}
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width={`${svgSize}`}
      height={`${svgSize}`}
      role='img'
    >
      <title>Hollow circle image decoration</title>
      <circle
        cx={`${cx}`}
        cy={`${cy}`}
        r={`${radius}`}
        stroke={color}
        strokeWidth={`${strokeWidth}`}
        fill='none'
        opacity={`${opacity}`}
      />
    </svg>
  );
};

export default HollowCircle;
