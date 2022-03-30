import { combineReducers } from '@reduxjs/toolkit';
import films from './films';
import planets from './planets';
import vehicles from './vehicles';
import starships from './starships';
import people from './people';
import species from './species';
import config from './config';

export default combineReducers({
  films,
  planets,
  vehicles,
  starships,
  people,
  species,
  config,
});
