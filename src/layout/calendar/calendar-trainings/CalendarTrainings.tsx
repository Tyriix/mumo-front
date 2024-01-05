import { FC, useEffect, useState } from 'react';
import './calendar-trainings.scss';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { useGetTrainingsQuery } from '../../../api/trainings/trainings.api';
import { Badge } from '@mui/material';
import { Dayjs } from 'dayjs';

const CalendarTrainings: FC = () => {
  const { data, error, isLoading } = useGetTrainingsQuery();
  const [highlightedDays, setHighlitedDays] = useState<Date[]>([]);

  useEffect(() => {
    if (data) {
      setHighlitedDays(data.trainings.map((training) => training.date));
    }
  }, [data]);

  function ServerDay(
    props: PickersDayProps<Dayjs> & { highlightedDays?: Date[] }
  ) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !outsideCurrentMonth && highlightedDays.includes(day.toDate());

    return (
      <Badge
        key={props.day.toString()}
        overlap='circular'
        badgeContent={isSelected ? 'x' : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
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
