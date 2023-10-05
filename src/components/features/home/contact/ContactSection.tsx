import ContactMap from './contact-map/ContactMap'
import './contact-section.scss'

const ContactSection = () => {
  return (
    <>
      <div className="contact">
        <h2 className="contact__header">KONTAKT</h2>
        <div className="contact__container">
          <div className="contact__map">
            <ContactMap></ContactMap>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactSection
