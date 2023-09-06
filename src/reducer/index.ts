import { combineReducers } from '@reduxjs/toolkit';
import { colorReducer } from 'reducer/colorReducer'
import { widthReducer } from 'reducer/lineWidthReducer'

export const rootReducer = combineReducers({
  lineColor: colorReducer,
  lineWidth: widthReducer,
});