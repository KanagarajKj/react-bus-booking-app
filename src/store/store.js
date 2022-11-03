import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../redux/slice/cartSlice';
import postReducer from '../redux/slice/postSlice'

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    post: postReducer,
  },
});

export default store;