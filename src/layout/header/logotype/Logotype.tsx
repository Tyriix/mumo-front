import { FC } from 'react';
import './logotype.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  isFirstNameVisible?: boolean;
  isSecondNameVisible?: boolean;
}

const LOGO_SRC = '/src/assets/images/logo-bg-01.png';

const Logotype: FC<Props> = ({
  className,
  isFirstNameVisible = true,
  isSecondNameVisible = true,
}) => {
  return (
    <div className={classNames('logotype', className)}>
      <img
        className='logotype__img'
        src={LOGO_SRC}
        alt='Logo Mumo pozytywne szkolenie psów'
        draggable='false'
      />
      <div
        className={classNames(
          'logotype__name',
          !isFirstNameVisible && 'invisible'
        )}
      >
        <p
          className={classNames(
            'logotype__name-child',
            !isFirstNameVisible && 'invisible'
          )}
        >
          Mumo
        </p>
        <p
          className={classNames(
            'logotype__name-child',
            !isSecondNameVisible && 'invisible'
          )}
        >
          pozytywne szkolenie psów
        </p>
      </div>
    </div>
  );
};

export default Logotype;
