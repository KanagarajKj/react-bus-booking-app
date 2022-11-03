import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  return fetch('https://swapi.dev/api/vehicles/').then((res) => res.json);
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },

  reducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },

    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },

    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },

    
  },
});

export default postSlice.reducer; 
