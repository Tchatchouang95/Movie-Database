import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import MovieDetails from './MovieDetails';

function HomePage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedmovie] = useState(null);

    async function fetchMovies() {
        const apiKey = '2fc44c30'
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
            setMovies(response.data.Search);
        } catch (error) {
        console.error('Error fetching data:', error);
        };
    }

    async function fetchMovieDetails(movieId) {
        const apiKey = '2fc44c30'
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
            setSelectedmovie(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        };
    };
    
  return (
    <div className='max-w-250 mx-auto my-2'> 
        <div style={{ backgroundImage: 'url("/terminator.jpg")' }} className="h-120 bg-cover w-full">
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-gray-700 text-center pt-40'>Welcome To Movie Database</h1>
                <input type="search"
                       placeholder='Search a Movie....'
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className='bg-amber-50 p-2 w-[60%] mt-20 shadow-md'
                />
                <button onClick={fetchMovies} 
                        className='text-amber-50 bg-[#DA9F58] py-2 px-4 shadow-md cursor-pointer hover:shadow-xl'>
                        Search
                </button>
            </div>
        </div>
      {selectedMovie ? (
        <MovieDetails 
          movieData={selectedMovie}
          onClickReturn={() => setSelectedmovie(null)}
        />
      ) : (
        <div>
            {movies.length ? <h2 className='text-xl text-gray-700 text-center bg-[#DA9F58]'>Search Results</h2>: ''}
            <div className='max-w-250 mx-auto grid grid-cols-2 sm:grid-cols-5'>
                {movies.map((movie) => (
                    <MovieCard 
                      key={movie.imdbID}
                      movie={movie}
                      onClick={() => fetchMovieDetails(movie.imdbID)}
                    />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;