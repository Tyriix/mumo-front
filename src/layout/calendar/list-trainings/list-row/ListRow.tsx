import './list-row.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Training } from '../../../../models/types/training.types';
import { TrainingTypes, TrainingTypesColors } from '../../../../models/enums/trainings.enum';
import { useEffect } from 'react';

interface ListRowProps {
  index: number;
  data?: Training | null;
}
const useClassToFirstListItemSpan = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll('.MuiTypography-root');

    listItems.forEach((element) => {
      element.classList.add('list-row__item-date-text');
    });

    return () => {
      listItems.forEach((element) => {
        element.classList.remove('list-row__item-date-text');
      });
    };
  }, []);
}

const ListRow = ({ data }: ListRowProps) => {
  useClassToFirstListItemSpan();

  const getPolishTrainingType = (trainingType: TrainingTypes): string => {
    switch (trainingType) {
      case TrainingTypes.GroupTraining:
        return 'Trening grupowy';
      case TrainingTypes.IndividualTraining:
        return 'Trening indywidualny';
      case TrainingTypes.GroupHandling:
        return 'Handling grupowy';
      case TrainingTypes.IndividualHandling:
        return 'Handling indywidualny';
      default:
        return 'Nieznany typ treningu';
    }
  };
  const formatWeekday = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const formattedWeekday = new Date(date).toLocaleDateString(
      'pl-PL',
      options
    );
    return `${formattedWeekday}`;
  };
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
    };
    const formattedDate = new Date(date).toLocaleDateString('pl-PL', options);
    return `${formattedDate}`;
  };
  const translateType = (trainingTypes: TrainingTypes) => {
    const translatedTrainingType = getPolishTrainingType(trainingTypes);
    return `${translatedTrainingType}`;
  };

  
  const trainingColor = data?.training_type
    ? TrainingTypesColors[data.training_type]
    : undefined;
    
    const handleClick = () => {
      if (data) {
        const trainingType = translateType(data.training_type);
        alert(`${trainingType}`);
      }
    };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <div
          className='list-row__container-date'
          style={{ borderLeft: `7px solid ${trainingColor}` }}
        >
          <ListItemText
            className='list-row__list-item-date'
            primary={data ? formatDate(data.date) : 'Unknown Date'}
          />
          <ListItemText
            className='list-row__list-item-date'
            primary={data ? formatWeekday(data.date) : 'Unknown Weekday'}
          />
        </div>
        <ListItemText
          className='list-row__list-item-type'
          primary={data ? translateType(data.training_type) : 'Unknown Type'}
        />
      </ListItemButton>
    </>
  );
};

export default ListRow;
