import ContactForm from './contact-form/ContactForm'
import ContactMap from './contact-map/ContactMap'
import './contact-section.scss'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const ContactSection = () => {
  
  return (
    <>
      <div className="contact">
        <h2 className="contact__header">KONTAKT</h2>
        <div className="contact__container">
          <div className="contact__map">
            <ContactMap></ContactMap>
          </div>
          <div className='contact__form'>
            <div className='contact__form-container'>
            <div className='contact__icons'>
            <a href='https://www.facebook.com/tresertrzebnica'><FaFacebook /></a>
            <a href='https://www.instagram.com/mumo_dogs/'><FaInstagram/></a>
            </div>
            <div className='contact__info'>
              <span className='contact__info-phone'><a href='tel:+48500083369'>(+48) 500-083-369</a></span>
              <span className='contact__info-email'><a href = "mailto:szkolenie.mumo@gmail.com">szkolenie.mumo@gmail.com</a></span>
            </div>
            <ContactForm></ContactForm>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactSection
