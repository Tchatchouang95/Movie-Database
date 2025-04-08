import React from 'react'

function MovieCard({ movie, onClick }) {

  return (
    <div 
      className='bg-gray-100 m-2 rounded-md overflow-hidden shadow-md max-w-75 transition-transform duration-200 hover:scale-105'
      onClick={onClick}
    >
        <img src={movie.Poster} alt="Movie Poster" />
        <h2 className='text-lg font-bold text-gray-700 p-2'>{movie.Title}</h2>
        <p className='text-sm p-2 text-gray-500'>{movie.Year}</p>
    </div>
  )
}

export default MovieCard;