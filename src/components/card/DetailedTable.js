import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDetailedData } from '../../store/reducers/weatherSlice';
import Arrow from '@mui/icons-material/ArrowCircleUpOutlined';
import { dailyIconHandler } from '../../utils/icon';

const DetailedTable = () => {
  const dispatch = useDispatch();
  const { seperatedData, detailedData } = useSelector((state) => state.weather);

  useEffect(() => {
    if (seperatedData) {
      dispatch(setDetailedData(seperatedData[0]));
    }
  }, [seperatedData]);

  if (!detailedData) {
    return null;
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: '1rem',
        backgroundColor: 'transparent',
        background: 'rgba(255, 255, 255, 0.25)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        '&-webkit-backdrop-filter': 'blur(8px)',
        border: '1px solid rgba(188, 198, 251, 0.3)'
      }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            sx={[
              {
                '& th': {
                  fontWeight: 'bold',
                  py: '0.4rem'
                }
              }
            ]}>
            <TableCell>Time</TableCell>
            <TableCell>Weather</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Wind Speed (m/sec)</TableCell>
            <TableCell>Wind Direction</TableCell>
            <TableCell>Wind Gust (m/sec)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detailedData.hourlyList.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.hour}</TableCell>
              <TableCell>
                <img
                  style={{ maxWidth: '30px', margin: '0' }}
                  src={dailyIconHandler([item.weatherIcon])}
                />
              </TableCell>
              <TableCell>{item.temp}°C</TableCell>
              <TableCell>{item.windSpeed}</TableCell>
              <TableCell>
                <Arrow sx={{ transform: `rotate(${item.windDeg}deg)` }} />{' '}
              </TableCell>
              <TableCell> {item.windGust}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailedTable;
