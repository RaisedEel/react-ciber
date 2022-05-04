import { createSlice } from '@reduxjs/toolkit';

const DUMMY_COMPUTERS = [
  {
    name: 'DEVICE NUMBER 1',
    price: 10,
    brand: 'Dell',
    antiquity: 10,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 2',
    price: 10,
    brand: 'Mac',
    antiquity: 5,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 3',
    price: 10,
    brand: 'HP',
    antiquity: 10,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Funciona correctamente.',
  },
];

const computersSlice = createSlice({
  name: 'computers',
  initialState: {
    computers: DUMMY_COMPUTERS,
  },
  reducers: {
    replaceComputers(state, action) {
      state.computers = action.payload;
    },
    addComputer(state, action) {
      state.computers.unshift(action.payload);
    },
    updateComputer(state, action) {
      const indexComp = state.computers.findIndex(
        (computer) => computer.name === action.payload.identification
      );
      state.computers[indexComp] = action.payload.updatedValues;
    },
    removeComputer(state, action) {
      state.computers = state.computers.filter(
        (computer) => computer.name !== action.payload
      );
    },
  },
});

export const computersActions = computersSlice.actions;
export default computersSlice;
