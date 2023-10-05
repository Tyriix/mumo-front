import ContactForm, {FormData} from './contact-form/ContactForm'
import ContactMap from './contact-map/ContactMap'
import './contact-section.scss'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const ContactSection = () => {
  function handleSubmit(data: FormData){
    console.log(data);
  }
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
            <FaFacebook />
            <FaInstagram/>
            </div>
            <div className='contact__info'>
              <span className='contact__info-phone'>(+48) 500-083-369</span>
              <span className='contact__info-email'>szkolenie.mumo@gmail.com</span>
            </div>
            <ContactForm onSubmit={handleSubmit}></ContactForm>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactSection
