import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { dailyIconHandler } from '../../utils/icon';

const WeatherCard = ({ value, onClick }) => {
  const iconArr = value.hourlyList.map((item) => item.weatherIcon);
  const icon = dailyIconHandler(iconArr);
  return (
    <Card
      sx={{
        maxWidth: 120,
        height: '100%',
        backgroundColor: 'transparent'
      }}
      onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h4" component="div">
            {value.day}
          </Typography>
          <Typography variant="h5" component="div">
            {value.date}
          </Typography>
        </CardContent>

        <CardMedia
          sx={{ width: '60%', mx: 'auto' }}
          component="img"
          image={icon}
          alt="weather img"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {value.minTemp}°C/{value.maxTemp}°C
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherCard;
