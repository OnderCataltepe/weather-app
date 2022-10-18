import WeatherCard from './WeatherCard';
import Grid from '@mui/material/Grid';
import { getCardDatas } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  setDetailedData,
  setSeperatedData,
  setSelectedCard
} from '../../store/reducers/weatherSlice';
const CardContainer = () => {
  const dispatch = useDispatch();
  const { data, seperatedData, selectedCard } = useSelector((state) => state.weather);

  const showDetailedCard = (index) => {
    dispatch(setDetailedData(seperatedData[index]));
    dispatch(setSelectedCard(index));
  };
  useEffect(() => {
    if (data.length !== 0) {
      const newData = getCardDatas(data);
      dispatch(setSeperatedData(newData));
    }
  }, [data]);
  return (
    <Grid
      sx={{ display: 'flex', alignItems: 'strech', flex: '1 1 0', p: '0.5rem', width: '%100' }}
      rowSpacing={2}
      columnSpacing={1}
      container
      wrap="nowrap">
      {seperatedData &&
        seperatedData.map((item, index) => (
          <Grid
            sx={[
              {
                p: '0 0.2rem',
                width: '23%',
                flex: '1 1 0',

                '&>div:nth-of-type(1)': {
                  '&-webkit-box-shadow': `${
                    selectedCard === index ? '0px 0px 15px 6px rgba(27,102,201,0.8)' : null
                  } `,
                  '&-moz-box-shadow': `${
                    selectedCard === index ? '0px 0px 15px 6px rgba(27,102,201,0.8)' : null
                  } `,
                  boxShadow: `${
                    selectedCard === index ? '0px 0px 15px 6px rgba(27,102,201,0.8)' : null
                  } `
                }
              }
            ]}
            item
            key={index}>
            <WeatherCard onClick={() => showDetailedCard(index)} value={item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CardContainer;
