import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movies/moviesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    movies: movieReducer,
  },
});
