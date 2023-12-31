import { FC } from 'react';
import './logotype.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { onNavbarAsyncClick } from '../../../utils/navigate.utils';
import { HomepageSections } from '../../../models/enums/enums.app';

interface Props {
  className?: string;
  isFirstNameVisible?: boolean;
  isSecondNameVisible?: boolean;
  toggleNavbar?: () => void;
}

const LOGO_SRC = '/src/assets/images/logo-bg-01.png';

const Logotype: FC<Props> = ({
  className,
  toggleNavbar,
  isFirstNameVisible = true,
  isSecondNameVisible = true,
}) => {
  const navigate = useNavigate();
  const isHomePage = location.pathname != '/';

  const navigateNotHome = async () => {
    const res = navigate('/');
    return res;
  };

  return (
    <a
      onClick={() =>
        isHomePage
          ? onNavbarAsyncClick(
              HomepageSections.Home,
              navigateNotHome,
              toggleNavbar
            )
          : null
      }
      tabIndex={0}
    >
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
    </a>
  );
};

export default Logotype;
