// Creates a Redux store that holds the state of the app. Only one store should exist.
import { configureStore } from '@reduxjs/toolkit';

// Importing the reducer file that is mostly unchanged
// import reducers from './reducers';
// Add Slice Reducers to the Store
import carReducer from './carSlice'

export default configureStore({
  reducer: {
    car: carReducer
  }
});
