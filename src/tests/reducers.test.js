// import { START_CAR, STOP_CAR } from '../utils/actions';
// import reducer from '../utils/reducers';
import { useDispatch } from "react-redux";
import { addCar, startCar, stopCar } from "../utils/carSlice";

const initialState = {
  cars: [
    {
      id: 1233,
      make: 'Honda',
      model: 'Civic',
      isRunning: false,
    },
    {
      id: 1234,
      make: 'Tesla',
      model: 'Y',
      isRunning: false,
    },
  ],
};

test('ADD_CAR', () => {
  const dispatch = useDispatch();

  let newState = dispatch(
    addCar({
      make: 'Ford',
      model: 'Escort',
    })
  );

  expect(initialState.cars.length).toBe(2);
  expect(newState.cars.length).toBe(3);
});

test('START_CAR', () => {
  const dispatch = useDispatch();

  let newState = dispatch(startCar(1234));

  expect(initialState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].isRunning).toBe(true);
});

test('STOP_CAR', () => {
  const dispatch = useDispatch();

  let newState = dispatch(stopCar(1234));

  expect(initialState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].make).toBe('Tesla');
  expect(newState.cars[1].isRunning).toBe(false);
});
