import './list-row.scss';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Training } from '../../../../models/types/training.types';
import { TrainingTypesColors } from '../../../../models/enums/trainings.enum';
import { useEffect } from 'react';

interface ListRowProps {
  index: number;
  data?: Training | null;
}

const ListRow = ({ index, data }: ListRowProps) => {
  const getPolishTrainingType = (trainingType: string) => {
    switch (trainingType) {
      case 'group training':
        return 'Trening grupowy';
      case 'individual training':
        return 'Trening indywidualny';
      case 'group handling':
        return 'Zajęcia grupowe';
      case 'individual handling':
        return 'Zajęcia indywidualne';
      default:
        return 'Nieznany rodzaj';
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
  const translateType = (trainingType: string) => {
    const translatedTrainingType = getPolishTrainingType(trainingType);
    return `${translatedTrainingType}`;
  };
  
  useEffect(() => {
    const listItems = document.querySelectorAll('.MuiTypography-root');

    listItems.forEach(element => {
      element.classList.add('list-item__date-text');
    });

    return () => {
      listItems.forEach(element => {
        element.classList.remove('list-item__date-text');
      });
    };
  }, []);
  const trainingColor = data?.training_type? TrainingTypesColors[data.training_type] : undefined;
  return (
    <>
        <ListItemButton>
          <div className='list-row__container-date' style={{borderLeft: `7px solid ${trainingColor}`}}>
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
