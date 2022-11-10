import {createSlice} from '@reduxjs/toolkit'
import busData from '../../busData';

const initialServiceState = {
  busDetails: busData,
  pickupPoint:null,
  droppingPoint:null,
  date:null,
};

console.log(initialServiceState.pickupPoint,'PICKUP')
console.log(initialServiceState.droppingPoint, 'DROP');
console.log(initialServiceState.date, 'DATE');

const cartSlice = createSlice({
  name: 'bus',
  initialState: initialServiceState,

  reducers: {
    updateLocation: (state, action) => {
      const { pickupPoint, droppingPoint, date } = action.payload;
      state.pickupPoint = pickupPoint;
      state.droppingPoint = droppingPoint;
      state.date = date;
    },
  },
});

 export const { updateLocation } = cartSlice.actions;

export default cartSlice.reducer;