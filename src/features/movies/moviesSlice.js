import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { moviesData } from '../../data/movie';

export const fetchMovies = createAsyncThunk('get/movies', async () => {
    const response = await moviesData;
    return response;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  reducers: {
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(value => value.id = action.payload.id);
    },
    // addMovie: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
          state.status = 'loading';
        },
        [fetchMovies.fulfilled]: (state, action) => {
          state.status = 'succeeded';
          console.log('action payload', action.payload);
          state.movies = action.payload;
        },
        [fetchMovies.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
    }
});

export const { removeMovie } = movieSlice.actions;

export const selectMovies = state => state.movies.movies;

export default movieSlice.reducer;
