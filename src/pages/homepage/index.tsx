import { FC } from 'react';
import HomeOfferSection from '../../layout/homepage/offer/OfferSection';
import AboutSection from '../../layout/homepage/about/AboutSection';
import StartViewSection from '../../layout/homepage/start-view/StartViewSection';
import ContactSection from '../../layout/homepage/contact/ContactSection';
import Header from '../../layout/header/Header';
import ScrollTopButton from '../../components/buttons/ScrollTopButton';
import ClientSection from '../../layout/homepage/clients/ClientsSection';
import Footer from '../../layout/footer/Footer';
import { HomepageSections } from '../../models/enums/enums.app';

const Homepage: FC = () => {
  return (
    <>
      <div id={HomepageSections.Home}>
        <Header />
        <StartViewSection />
        <AboutSection />
        <HomeOfferSection />
        <ClientSection />
        <ContactSection />
        <ScrollTopButton />
        <Footer isLoginRegister={false} />
      </div>
    </>
  );
};

export default Homepage;
