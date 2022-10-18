import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SelectInput from './components/SelectInput';
import CardContainer from './components/card/CardContainer';
import DetailedTable from './components/card/DetailedTable';
import Box from '@mui/material/Box';
function App() {
  const { isError } = useSelector((state) => state.weather);

  return (
    <div className="backGround">
      <div className="App">
        {isError && <h3 style={{ color: 'red' }}>Please select a city.</h3>}

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'start',
            justifyContent: 'center',
            width: '100%'
          }}>
          <SelectInput />
          <CardContainer />
        </Box>

        <DetailedTable />
      </div>
    </div>
  );
}

export default App;
