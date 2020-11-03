import React, { useEffect, useState } from 'react';

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/movie/550?api_key=e2ea6a597cbd2db066a2e7fa2c3efa6d";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [ movies, setMovies ] = useState([]);
  
  useEffect(() => {
    fetch(FEATURED_API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data);
    });

  }, [])

  return <div className="movie-container">
    {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />
    )} 
    </div>
}

export default App;
