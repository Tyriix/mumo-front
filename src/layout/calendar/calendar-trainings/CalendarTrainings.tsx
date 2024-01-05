import { FC, useEffect, useState } from 'react';
import './calendar-trainings.scss';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { useGetTrainingsQuery } from '../../../api/trainings/trainings.api';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from '@mui/material';

const CalendarTrainings: FC = () => {
  const { data, error, isLoading } = useGetTrainingsQuery();
  const [highlightedDays, setHighlitedDays] = useState<Date[]>([]);
  const initialValue = dayjs('2022-04-17');

  useEffect(() => {
    if (data) {
      setHighlitedDays(data.trainings.map((training) => training.date));
    }
  }, [data]);

  function ServerDay(
    props: PickersDayProps<Dayjs> & { highlightedDays?: Date[] }
  ) {
    const { day, outsideCurrentMonth, ...other } = props;

    return (
      <Badge key={props.day.toString()} overlap='circular'>
        <PickersDay
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
          {...other}
        />
      </Badge>
    );
  }

  return (
    <div className='calendar__trainings-container'>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error occurred while fetching data</p>}
      </ul>
      {data && (
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            } as any,
          }}
        />
      )}
    </div>
  );
};

export default CalendarTrainings;
