import './list-box.scss';
import Box from '@mui/material/Box';
import ListRow from '../list-row/ListRow';
import { useGetTrainingsQuery } from '../../../../api/trainings/trainings.api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ListBox = () => {
    const { data: trainings, isLoading, isError } = useGetTrainingsQuery();

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error loading trainings</div>;
    }

    const desiredRows = 6;

  // Calculate the height of each list item to fill the available space
  const itemHeight = `${100 / desiredRows}%`;
    return(
        <>
        <Box sx={{ width: '30em', height: '30em', backgroundColor: 'background.paper' }}>
        <List sx={{ width: '100%', height: '100%', overflow: 'hidden', overflowY: 'auto', margin: 0, padding: 0}}>
        {trainings?.trainings?.map((training, index) => (
          <ListItem key={index} style={{ height: itemHeight }}>
            <ListRow index={index} data={training} style={undefined} />
          </ListItem>
        ))}
      </List>
    </Box>
        </>
    );
};

export default ListBox;