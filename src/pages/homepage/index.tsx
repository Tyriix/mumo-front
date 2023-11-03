import { FC } from 'react';
import HomeOfferSection from '../../layout/homepage/offer/OfferSection';
import AboutSection from '../../layout/homepage/about/AboutSection';
import StartViewSection from '../../layout/homepage/start-view/StartViewSection';
import ContactSection from '../../layout/homepage/contact/ContactSection';
import Header from '../../layout/header/Header';
import ScrollTopButton from '../../components/buttons/ScrollTopButton';
import ClientSection from '../../layout/homepage/clients/ClientsSection';

const Homepage: FC = () => {
  // const tempElement = {
  //   color: 'white',
  //   width: '100%',
  //   height: '600px',
  // };

  return (
    <>
      <Header />
      <StartViewSection />
      <AboutSection />
      <HomeOfferSection />
      <ClientSection />
      <ContactSection />
      <ScrollTopButton />
    </>
  );
};

export default Homepage;
