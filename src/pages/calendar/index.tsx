import { FC } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import CalendarSection from '../../layout/calendar/CalendarSection';
// import { Training } from '../../models/types/training.types';
// import { useGetTrainingsQuery } from '../../api/trainings/trainings.api';

const Calendar: FC = () => {
  // const { data: trainings, error, isLoading } = useGetTrainingsQuery();

  return (
    <>
      <Header />
      {/* <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error occurred while fetching data</p>}
        {trainings && (
          <ul>
            {trainings.trainings.map((training: Training) => (
              <li key={training.training_id}>
                <p>Type: {training.training_type}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <CalendarSection />
      <Footer isLoginRegister={true} />
    </>
  );
};

export default Calendar;
