import { FC } from 'react';

interface Props {
  className: string;
  colorTop: string;
  colorBottom: string;
}

const WaveShape: FC<Props> = ({ className, colorTop, colorBottom }) => {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-14 84.8285L15 72.8285C43 60.8285 100 36.8285 157 42.8285C215 48.8285 272 84.8285 329 84.8285C386 84.8285 443 48.8285 500 60.8285C557 72.8285 615 132.829 672 126.829C729 120.829 786 48.8285 843 18.8285C900 -11.1715 957 0.82854 1015 12.8285C1072 24.8285 1129 36.8285 1157 42.8285L1186 48.8285V336.829H1157C1129 336.829 1072 336.829 1015 336.829C957 336.829 900 336.829 843 336.829C786 336.829 729 336.829 672 336.829C615 336.829 557 336.829 500 336.829C443 336.829 386 336.829 329 336.829C272 336.829 215 336.829 157 336.829C100 336.829 43 336.829 15 336.829H-14V84.8285Z"
        fill={`${colorTop}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-14 134.998L15 125.379C43 115.76 100 96.5216 157 101.331C215 106.141 272 134.998 329 134.998C386 134.998 443 106.141 500 115.76C557 125.379 615 173.475 672 168.665C729 163.856 786 106.141 843 82.0929C900 58.045 957 67.6642 1015 77.2833C1072 86.9024 1129 96.5216 1157 101.331L1186 106.141V337H1157C1129 337 1072 337 1015 337C957 337 900 337 843 337C786 337 729 337 672 337C615 337 557 337 500 337C443 337 386 337 329 337C272 337 215 337 157 337C100 337 43 337 15 337H-14V134.998Z"
        fill={`${colorBottom}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-14 185.125L16.1117 177.892C45.185 170.66 104.37 156.196 163.555 159.812C223.778 163.428 282.963 185.125 342.148 185.125C401.333 185.125 460.518 163.428 519.703 170.66C578.888 177.892 639.112 214.053 698.297 210.437C757.482 206.821 816.667 163.428 875.852 145.348C935.037 127.267 994.222 134.499 1054.44 141.732C1113.63 148.964 1172.81 156.196 1201.89 159.812L1232 163.428V337H1201.89C1172.81 337 1113.63 337 1054.44 337C994.222 337 935.037 337 875.852 337C816.667 337 757.482 337 698.297 337C639.112 337 578.888 337 519.703 337C460.518 337 401.333 337 342.148 337C282.963 337 223.778 337 163.555 337C104.37 337 45.185 337 16.1117 337H-14V185.125Z"
        fill="white"
      />
    </svg>
  );
};

export default WaveShape;
