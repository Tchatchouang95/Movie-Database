import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard(props) {


  return (
    <div>
    <h2 className='text-xl text-gray-700 text-center bg-[#DA9F58]'>Search Results</h2>
    <div className='max-w-250 mx-auto grid grid-cols-2 sm:grid-cols-5'>
        {props.movies.map((movie, index) => (
            <div key={index} className='bg-gray-100 m-2 rounded-md overflow-hidden shadow-md max-w-75 transition-transform duration-200 hover:scale-105'>
                <Link to={`/details/${movie.imdbID}`}>
                <img src={movie.Poster} alt="Movie Poster" />
                <h2 className='text-lg font-bold text-gray-700 p-2'>{movie.Title}</h2>
                <p className='text-sm p-2 text-gray-500'>{movie.Year}</p>
                </Link>
            </div>
        ))}
    </div>
    </div>
  )
}

export default MovieCard;