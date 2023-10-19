import * as constants from '../../../models/constants';
import ContactForm from './contact-form/ContactForm';
import ContactMap from './contact-map/ContactMap';
import './contact-section.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <>
      <div className='contact'>
        <h2 className='contact__header'>KONTAKT</h2>
        <div className='contact__container'>
          <div role='presentation' className='contact__map'>
            <ContactMap></ContactMap>
          </div>
          <div className='contact__form'>
            <div className='contact__form-container'>
              <div className='contact__icons'>
                <a
                  className='contact__icons-link'
                  href={constants.FACEBOOK_LINK}
                  target='_blank'
                >
                  <FaFacebook aria-label='Facebook icon' />
                </a>
                <a
                  className='contact__icons-link'
                  href={constants.INSTAGRAM_LINK}
                  target='_blank'
                >
                  <FaInstagram aria-label='Instagram icon' />
                </a>
              </div>
              <div className='contact__info'>
                <span className='contact__info-phone'>
                  <a
                    className='contact__info-link'
                    href={`tel:+48${constants.PHONE_NUMBER}`}
                  >
                    (+48){' '}
                    {constants.PHONE_NUMBER.replace(
                      /(\d{3})(\d{3})(\d{3})/,
                      '$1-$2-$3'
                    )}
                  </a>
                </span>
                <span className='contact__info-email'>
                  <a
                    className='contact__info-link'
                    href={`mailto:${constants.MAIL_ADRESS}`}
                  >
                    {constants.MAIL_ADRESS}
                  </a>
                </span>
              </div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactSection;
