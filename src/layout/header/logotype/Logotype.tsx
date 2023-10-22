import { FC } from 'react';
import './logotype.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const LOGO_SRC = '/src/assets/images/logo-bg-01.png';

const Logotype: FC<Props> = ({ className }) => {
  return (
    <div className={classNames('logotype', className)}>
      <img
        className='logotype__img'
        src={LOGO_SRC}
        alt='Logo Mumo pozytywne szkolenie psów'
      />
      <div className='logotype__name'>
        <p className='logotype__name-child'>Mumo</p>
        <p className='logotype__name-child'>pozytywne szkolenie psów</p>
      </div>
    </div>
  );
};

export default Logotype;
