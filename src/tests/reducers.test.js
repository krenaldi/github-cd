import carSlice, {
  initialState,
  addCar,
  startCar,
  stopCar,
} from "../utils/carSlice";

describe("test for carSlice", () => {
  test("initialize slice with initialState", () => {
    const carSliceInit = carSlice(initialState, { type: "unknown" });
    expect(carSliceInit).toBe(initialState);
  });
});

test("ADD_CAR", () => {
  const newData = {
    id: 3,
    make: "Ford",
    model: "Escort",
  };

  const afterAddCarOperation = carSlice(initialState, addCar(newData));
  expect(afterAddCarOperation).toStrictEqual({
    cars: [...initialState.cars, newData],
  });
});

test("START_CAR", () => {
  const afterStartCarOperation = carSlice(initialState, startCar(1));

  expect(afterStartCarOperation.cars[0].isRunning).toBe(true);
});

test("STOP_CAR", () => {
  const afterStartCarOperation = carSlice(initialState, startCar(1));

  const afterStopCarOperation = carSlice(afterStartCarOperation, stopCar(1));

  expect(afterStopCarOperation.cars[0].isRunning).toBe(false);
});
