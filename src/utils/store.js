// Creates a Redux store that holds the state of the app. Only one store should exist.
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Importing the reducer file that is mostly unchanged
// import reducers from './reducers';
// Add Slice Reducers to the Store
import carReducer from './carSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  car: carReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
