import { FC, useRef } from 'react';
import HomeOfferSection from '../../layout/homepage/offer/OfferSection';
import AboutSection from '../../layout/homepage/about/AboutSection';
import StartViewSection from '../../layout/homepage/start-view/StartViewSection';
import ContactSection from '../../layout/homepage/contact/ContactSection';
import Header from '../../layout/header/Header';

const Homepage: FC = () => {
  const refOffer = useRef<HTMLDivElement>(null);

  const tempElement = {
    color: 'white',
    width: '100%',
    height: '600px',
  };

  return (
    <>
      <Header />
      <StartViewSection refOffer={refOffer} />
      <AboutSection />
      <HomeOfferSection ref={refOffer} />
      <div style={tempElement}></div>
      <ContactSection />
    </>
  );
};

export default Homepage;
