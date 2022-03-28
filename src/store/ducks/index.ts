import { combineReducers } from '@reduxjs/toolkit';
import films from './films';
import planets from './planets';

export default combineReducers({
  films,
  planets,
});
