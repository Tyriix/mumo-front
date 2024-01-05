import { FC, useEffect, useState } from 'react';
import './calendar-trainings.scss';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { useGetTrainingsQuery } from '../../../api/trainings/trainings.api';
import { Badge } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const CalendarTrainings: FC = () => {
  const { data, error, isLoading } = useGetTrainingsQuery();
  const [highlightedDays, setHighlitedDays] = useState<Dayjs[]>([]);

  useEffect(() => {
    if (data) {
      setHighlitedDays(data.trainings.map((training) => dayjs(training.date)));
    }
  }, [data]);

  function ServerDay(
    props: PickersDayProps<Dayjs> & { highlightedDays?: Dayjs[] }
  ) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !outsideCurrentMonth &&
      highlightedDays.some((highlightedDay) =>
        highlightedDay.isSame(day, 'day')
      );

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
              // eslint-disable-next-line
            } as any,
          }}
        />
      )}
    </div>
  );
};

export default CalendarTrainings;
