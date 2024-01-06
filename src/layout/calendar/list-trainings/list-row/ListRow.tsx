import './list-row.scss';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListChildComponentProps } from 'react-window';
import { Training } from '../../../../models/types/training.types';

interface ListRowProps extends Omit<ListChildComponentProps, 'data'> {
  data?: Training | null;
}

const ListRow = ({ index, style, data }: ListRowProps) => {
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

  const formatData = (date: Date, trainingType: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', weekday: 'short', };
    const formattedDate = new Date(date).toLocaleDateString('pl-PL', options);
    const translatedTrainingType = getPolishTrainingType(trainingType);
    return `${formattedDate} ${translatedTrainingType}`;
  };
  return (
    <>
      <ListItem
        style={style}
        key={index}
        component='div'
        disablePadding
      >
        <ListItemButton>
        <ListItemText primary={data ? formatData(data.date, data.training_type) : 'Unknown Date'} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListRow;
