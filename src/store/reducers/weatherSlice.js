import { fabClasses } from '@mui/material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('weather/getData', async (city) => {
  const response = await axios.get(process.env.REACT_APP_API_URL, {
    params: {
      q: `${city},TR`,
      units: 'metric',
      cnt: 40,
      appid: process.env.REACT_APP_API_KEY
    }
  });

  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    seperatedData: null,
    detailedData: null,
    selectedCard: 0,
    isLoading: false,
    isError: false
  },
  reducers: {
    setDetailedData: (state, action) => {
      state.detailedData = action.payload;
    },
    setSeperatedData: (state, action) => {
      state.seperatedData = action.payload;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    }
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export default weatherSlice.reducer;

export const { setDetailedData, setSeperatedData, setSelectedCard } = weatherSlice.actions;
