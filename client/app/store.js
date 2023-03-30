import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import calendarSlice from '../../src/features/calendarSlice';
import authReducer from '../features/auth/authSlice';

import singleTaskSlice from '../../src/features/singleTaskSlice';
import allTaskSlice from '../../src/features/allTaskSlice';

import singleNoteSlice from '../../src/features/singleNoteSlice';
import allNoteSlice from '../../src/features/allNoteSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer,
    event: calendarSlice,
    task: singleTaskSlice,
    allTask: allTaskSlice,
    note: singleNoteSlice,
    allNote: allNoteSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
