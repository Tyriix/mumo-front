import { FC } from 'react';
import ContactFormFields from './contact-form/ContactForm';
import ContactMap from './contact-map/ContactMap';
import './contact-section.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HomepageSections } from '../../../models/enums/enums.app';
import classNames from 'classnames';
import { infoConstants } from '../../../models/constants/info.constant';

const ContactSection: FC = () => {
  return (
    <div className='contact' id={HomepageSections.Contact}>
      <h2 className='contact__header'>Kontakt</h2>
      <div className='contact__container'>
        <div role='presentation' className='contact__map'>
          <ContactMap />
        </div>
        <div className='contact__form'>
          <div className='contact__form-container'>
            <div className='contact__icons'>
              <a
                className='contact__icons-link'
                href={infoConstants.FACEBOOK_LINK}
                target='_blank'
              >
                <FaFacebook
                  className='contact__link-hover'
                  aria-label='Facebook icon'
                />
              </a>
              <a
                className='contact__icons-link'
                href={infoConstants.INSTAGRAM_LINK}
                target='_blank'
              >
                <FaInstagram
                  className='contact__link-hover'
                  aria-label='Instagram icon'
                />
              </a>
            </div>
            <div className='contact__info'>
              <span className='contact__info-phone'>
                <a
                  className={classNames(
                    'contact__info-link',
                    'contact__link-hover'
                  )}
                  href={`tel:+48${infoConstants.PHONE_NUMBER}`}
                >
                  (+48){' '}
                  {infoConstants.PHONE_NUMBER.replace(
                    /(\d{3})(\d{3})(\d{3})/,
                    '$1-$2-$3'
                  )}
                </a>
              </span>
              <span className='contact__info-email'>
                <a
                  className={classNames(
                    'contact__info-link',
                    'contact__link-hover'
                  )}
                  href={`mailto:${infoConstants.MAIL_ADRESS}`}
                >
                  {infoConstants.MAIL_ADRESS}
                </a>
              </span>
            </div>
            <ContactFormFields />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
