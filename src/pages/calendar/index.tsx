import { FC } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import CalendarSection from '../../layout/calendar/CalendarSection';

const Calendar: FC = () => {
  return (
    <>
      <Header />
      <CalendarSection />
      <Footer isLoginRegister={true} />
    </>
  );
};

export default Calendar;
