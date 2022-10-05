import { configureStore } from '@reduxjs/toolkit';
import weather from './reducers/weatherSlice';
export default configureStore({
  reducer: {
    weather
  }
});
