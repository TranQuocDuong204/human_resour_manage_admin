import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlices"
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    auth: authReducer,
  });
  
export const store = configureStore({
    reducer: rootReducer,
  });