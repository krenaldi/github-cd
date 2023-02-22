import { createSlice } from "@reduxjs/toolkit";
import createId from "./createId";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [
      {
        id: 1,
        make: "Honda",
        model: "Civic",
        year: "2008",
        isRunning: false,
      },
      {
        id: 2,
        make: "Tesla",
        model: "Y",
        year: "2021",
        isRunning: false,
      },
    ],
  },
  reducers: {
    addCar: (state, action) => {
      const newCarId = createId(state.cars);
      const newCar = { ...action.payload, id: newCarId };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    },
    startCar: (state, action) => {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    },
    stopCar: (state, action) => {
      const carIndex = state.cars.findIndex((car) => car.id === action.payload);
      const updatedCar = { ...state.cars[carIndex], isRunning: false };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
  }
});

export const { addCar, startCar, stopCar } = carSlice.actions;

export default carSlice.reducer;