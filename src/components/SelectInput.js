import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../store/reducers/weatherSlice';
import { cities } from '../utils';

const SelectInput = () => {
  const options = cities;
  const dispatch = useDispatch();
  const [value, setValue] = useState(options[6]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(getData(value));
  }, [value]);
  return (
    <div id="selectContainer">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 200, p: '0.5rem' }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </div>
  );
};

export default SelectInput;
