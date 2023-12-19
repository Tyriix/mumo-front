import HollowCircle from '../../components/shapes/HollowCircle';
import { colorsConstants } from '../../models/constants/style.constant';
import './calendar-section.scss';
import CalendarTrainings from './calendar-trainings/CalendarTrainings';
import ListTrainings from './list-trainings/ListTrainings';

const CalendarSection = () => {
  return (
    <>
      <div className='calendar'>
        <div className='calendar__container'>
          <h2 className='calendar__header'>Umów się na zajęcia!</h2>
          <div className='calendar__block'>
              <ListTrainings />
            <div className='calendar__trainings'>
              <CalendarTrainings />
            </div>
          </div>
        </div>
        <div className='calendar__big-circle-container'>
          <HollowCircle
            className='calendar__full-circle'
            svgSize={1000}
            cx={500}
            cy={500}
            radius={200}
            strokeWidth={80}
            color={colorsConstants.HERO_CIRCLES_COLOR}
            opacity={0.4}
          />
        </div>
        <div className='calendar__small-circle-container'>
          <HollowCircle
            className='calendar__full-circle'
            svgSize={300}
            cx={150}
            cy={150}
            radius={60}
            strokeWidth={25}
            color={colorsConstants.HERO_CIRCLES_COLOR}
            opacity={0.3}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
