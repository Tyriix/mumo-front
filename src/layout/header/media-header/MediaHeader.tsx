import { FC } from 'react';
import * as constants from '../../../models/constants.app';
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import './media-header.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const MediaHeader: FC<Props> = ({ className }) => {
  return (
    <div className={classNames('media-header', className)}>
      <div className='media-header__box'>
        <a
          className='media-header__icon-link'
          href={constants.FACEBOOK_LINK}
          target='_blank'
        >
          <FaFacebook
            className='media-header__icon'
            aria-label='Facebook icon'
          />
        </a>

        <a
          className='media-header__icon-link'
          href={constants.INSTAGRAM_LINK}
          target='_blank'
        >
          <FaInstagram
            className='media-header__icon'
            aria-label='Instagram icon'
          />
        </a>

        <a
          className='media-header__icon-link'
          href={`tel:+48${constants.PHONE_NUMBER}`}
          target='_blank'
        >
          <FaPhoneAlt className='media-header__icon' aria-label='Phone icon' />
        </a>

        <a
          className='media-header__icon-link'
          href={`mailto:${constants.MAIL_ADRESS}`}
          target='_blank'
        >
          <FaEnvelope className='media-header__icon' aria-label='Mail icon' />
        </a>
      </div>
    </div>
  );
};

export default MediaHeader;
