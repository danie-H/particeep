import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovies,
  selectMovies,
} from './moviesSlice';

export function Movies() {
  const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');
 const movies = useSelector(selectMovies);
 
  useEffect(() => {
      dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div>
        <h2>Liste des film</h2>
     {movies && movies.map(movie => {
         return <div><span style={{whiteSpace: "pre-line"}}>{movie.title}</span></div>
     })}
    </div>
  );
}
