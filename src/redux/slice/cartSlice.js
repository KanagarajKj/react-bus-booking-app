import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentLocation : null,
}

console.log(initialState.currentLocation);

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    userSearchedLocation: (state, action) => {
      state.currentLocation = action.payload;
    },

    busData: (state, action) => {
      const { availableBus } = action.payload;
      state.busDetails = availableBus;
    },
  },
});

export const { userSearchedLocation } = cartSlice.actions;

export default cartSlice.reducer;