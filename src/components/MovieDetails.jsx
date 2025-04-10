import React from 'react';

function MovieDetails({ movieData, onClickReturn}) {
    
  return (
    <div className='max-w-250 mx-auto p-4'>
        <div className='text-white bg-[#DA9F58] flex w-20 my-2 p-2 rounded-xl shadow-md cursor-pointer hover:shadow-xl'
             onClick={onClickReturn}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
          <button className='cursor-pointer hover:shadow-xl'>Back to Search Results</button>
        </div>
        <div className='md:flex'>
            <img src={movieData.Poster} alt="Movie Poster" className='rounded shadow-2xl lg:w-full' />
            <div className='pl-4'>
                <h2 className='text-4xl font-bold text-gray-700 pb-4'>{movieData.Title}</h2>
                <p className='py-2'>
                    <span className='font-semibold text-gray-700'>Year: </span><span className='text-gray-500'>{movieData.Year}</span>
                </p>
                <p className='py-2'>
                    <span className='font-semibold text-gray-700'>Genre: </span><span className='text-gray-500'>{movieData.Genre}</span>
                </p>
                <p className='py-2'>
                    <span className='font-semibold text-gray-700'>Cast: </span><span className='text-gray-500'>{movieData.Actors}</span>
                </p>
                <p className='text-2xl font-semibold text-gray-700 py-4'>Ratings:</p>
                {movieData.Ratings.map((rating, index) => (
                    <div className='list-none'>
                        <li key={index} className='py-2'>
                        <span className='font-semibold text-gray-700' >{rating.Source}: </span><span className='text-gray-500'>{rating.Value}</span>
                        </li>
                    </div>
                    
                ))}
                <p className='text-2xl font-semibold text-gray-700 py-4'>Plot:</p>
                <p className='text-gray-500'>{movieData.Plot}</p>
                <button className='text-white rounded-xl px-4 py-2 my-4 bg-[#DA9F58]'>Add to Favourites</button>
            </div>
        </div>
    </div>    
  )
}

export default MovieDetails;