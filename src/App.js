import React, { useEffect, useState } from 'react'
import './App.css';
import Movie from './components/Movie/Movie';

function App() {

  const API_FEATURED = "https://api.themoviedb.org/3/discover/movie?api_key=e25f5e477aa44b7f2eec1a83c763a0cc&sort_by=popularity.desc";
  const API_SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie?api_key=e25f5e477aa44b7f2eec1a83c763a0cc&query=";

  // const API_FEATURED = "https://api.themoviedb.org/3/search/movie?api_key=e25f5e477aa44b7f2eec1a83c763a0cc&query=avengers"

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_FEATURED);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
  }

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(searchTerm !== "") {
      getMovies(API_SEARCH_MOVIE + searchTerm);

      setSearchTerm("");
    } else {
      getMovies(API_FEATURED);
    }
    
  }

  return (
    <>
      <header>
        <span className="titleWebsite">Movies App with React</span>
        <form onSubmit={onSubmitHandler}>
          <input className="search" type="text" placeholder="Search..." value={searchTerm} onChange={onChangeHandler} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie 
            key={movie.id}
            {...movie}
          />
        ))}
      </div>
    </>
  );
}

export default App;
