import { FC } from 'react';
import WelcomeText from './welcome-text/WelcomeText';
import HeroSection from './hero-section/HeroSection';

const StartViewSection: FC = () => {
  return (
    <div className='start-view'>
      <HeroSection />
      <WelcomeText />
    </div>
  );
};

export default StartViewSection;
