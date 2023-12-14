import { FC } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

const Calendar: FC = () => {
  return (
    <>
      <Header />
      <Footer isLoginRegister={true} />
    </>
  );
};

export default Calendar;
