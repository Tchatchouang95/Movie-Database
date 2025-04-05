import React, { useEffect } from 'react'
import { useState } from 'react';
import MovieCard from './MovieCard';



function HomePage() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])

    async function fetchMovies() {
        try {
            const api = `http://www.omdbapi.com/?s=${query}&apikey=2fc44c30`;
            const response = await fetch(api);
            const data = await response.json();
            if(data?.Search?.length>0){
                setMovies(data.Search);
            }else{
                (<p>No Matching results!</p>)
            }
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchMovies()}
    , [])
    
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
                <button onClick={() => {fetchMovies()}} className='text-amber-50 bg-[#DA9F58] py-2 px-4 shadow-md cursor-pointer hover:shadow-xl'>Search</button>
            </div>
        </div>
        <MovieCard movies={movies} />
    </div>
  )
}

export default HomePage;