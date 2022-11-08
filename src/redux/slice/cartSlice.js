import {createSlice} from '@reduxjs/toolkit'
import busData from '../../busData';

const initialState = {
  busDetails: busData,
  searchedLocation:'',
};

console.log(initialState.busDetails,'BUSES')
const cartSlice = createSlice({
  name: 'bus',
  initialState,

  reducers: {
    updateLocation: (state, action) => {
      state.pickUpPoint = action.payload?.pickUpPoint;
      state.droppingPoint = action.payload?.droppingPoint;
    },
    busDetails: (state, action) => {
      const {data} = action.payload;
      state.busDetails = data;
    },
  }, 
});

 export const { busDetails, updateLocation } = cartSlice.actions;

export default cartSlice.reducer;