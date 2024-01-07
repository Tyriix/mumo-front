import { FC, useEffect, useState } from 'react';
import './calendar-trainings.scss';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { useGetTrainingsQuery } from '../../../api/trainings/trainings.api';
import dayjs, { Dayjs } from 'dayjs';
import { darken } from 'polished';
import { Training } from '../../../models/types/training.types';
import { TrainingTypesColors } from '../../../models/enums/trainings.enum';

const CalendarTrainings: FC = () => {
  const { data, isLoading } = useGetTrainingsQuery();
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    if (data) {
      setTrainings(data.trainings);
    }
  }, [data]);

  const ServerDay = (
    props: PickersDayProps<Dayjs> & { trainings?: Training[] }
  ) => {
    const { trainings = [], day, outsideCurrentMonth, ...other } = props;
    let selectedTraining: Training | undefined;

    const isSelected =
      !outsideCurrentMonth &&
      trainings.some((training) => dayjs(training.date).isSame(day, 'day'));

    if (isSelected) {
      selectedTraining = trainings.find((training) =>
        dayjs(training.date).isSame(day, 'day')
      );
    }
    const trainingColor = selectedTraining
      ? TrainingTypesColors[selectedTraining.training_type]
      : undefined;

    return (
      <PickersDay
        {...other}
        sx={{
          '&.Mui-selected': {
            backgroundColor: trainingColor,
          },
          '&.Mui-selected:hover': {
            backgroundColor: darken(0.15, trainingColor || '#000'),
          },
        }}
        selected={isSelected}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    );
  };

  return (
    <div className='calendar__trainings-container'>
      {data && (
        <DateCalendar
          loading={isLoading}
          slots={{
            day: ServerDay,
          }}
          sx={{ width: '100%', height: '100%' }}
          slotProps={{
            day: {
              trainings,
              // eslint-disable-next-line
            } as any,
          }}
        />
      )}
    </div>
  );
};

export default CalendarTrainings;
