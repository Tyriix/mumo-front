import './list-trainings.scss';
import Box from '@mui/material/Box';
import ListRow from './list-row/ListRow';
import { useGetTrainingsQuery } from '../../../api/trainings/trainings.api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ListTrainings = () => {
  const { data: trainings } = useGetTrainingsQuery();
  const listRowCount = 6;
  const itemHeight = `${101 / listRowCount}%`;

  return (
    <>
    <div className='listbox__container'>
        <Box>
          <List>
            {trainings?.trainings?.map((training, index) => (
              <ListItem key={index} style={{ height: itemHeight }}>
                <ListRow index={index} data={training} />
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    </>
  );
};

export default ListTrainings;
