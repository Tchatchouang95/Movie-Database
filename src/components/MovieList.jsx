import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieList() {

  const [movies, setMovies] = useState(
        [{
            "Title": "The Avengers",
            "Year": "2012",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode IX - The Rise of Skywalker",
            "Year": "2019",
            "imdbID": "tt2527338",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "The Antman",
            "Year": "2002",
            "imdbID": "tt0321249",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzAxMmM0M2EtNzQwYi00NjJkLTljYzEtNTc0Njg5MTdiMjhhXkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "The Amazing Spiderman 2 Webb Cut",
            "Year": "2021",
            "imdbID": "tt18351128",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "She-Hulk: Attorney at Law",
            "Year": "2022",
            "imdbID": "tt10857160",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjg4ZTQ1MjctNzEyMS00YWM2LTk1ZTQtNDU3ZDJjNjhhMDhkXkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "Survivor",
            "Year": "2015",
            "imdbID": "tt3247714",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDM5MTQ0MF5BMl5BanBnXkFtZTgwMDEzNTUxNTE@._V1_SX300.jpg"
        }, {
            "Title": "GTA VR",
            "Year": "2016",
            "imdbID": "tt6145852",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTQ5YTRkYTEtZWE4MC00MWUwLTk1MjgtYWFiZGVkMjFiMWMwXkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "Digimon Fusion",
            "Year": "2013–2015",
            "imdbID": "tt2746566",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzY4ODcwOV5BMl5BanBnXkFtZTgwMzkwMjY0NDE@._V1_SX300.jpg"
        }, {
            "Title": "Africa Fusion",
            "Year": "2016",
            "imdbID": "tt5785934",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTA1MDY5OTQ1Ml5BMl5BanBnXkFtZTgwMDU5MDMxOTE@._V1_SX300.jpg"
        }, {
            "Title": "Iron Man 3",
            "Year": "2013",
            "imdbID": "tt1300854",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_SX300.jpg"
        }, {
            "Title": "John Wick: Chapter 4",
            "Year": "2023",
            "imdbID": "tt10366206",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "John Wick: Chapter 3 - Parabellum: HBO First Look",
            "Year": "2019",
            "imdbID": "tt10275370",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        }, {
            "Title": "The Raincoat Killer: Chasing a Predator in Korea",
            "Year": "2021",
            "imdbID": "tt15484900",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTMxMmExNjUtM2QxYy00MTYwLWJmNDUtOTA4OTZmOWI3ZjkyXkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "Star Wars: Episode IX - The Rise of Skywalker",
            "Year": "2019",
            "imdbID": "tt2527338",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg"
        }, {
            "Title": "The Equalizer 3",
            "Year": "2023",
            "imdbID": "tt17024450",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTM1OTAyYmQtY2ZiZS00NTRlLWEyZDYtZWMyYjMyOTE2YWE4XkEyXkFqcGc@._V1_SX300.jpg"
        }],
    )

  return (
    <div className='max-w-250 mx-auto grid grid-cols-2 sm:grid-cols-4'>
        {movies.map((movie, index) => (
            <div key={index} className='bg-gray-100 m-2 rounded-md overflow-hidden shadow-md max-w-75 transition-transform duration-200 hover:scale-105'>
                <Link to={`/details/${movie.imdbID}`}>
                    <img src={movie.Poster} alt="Movie Poster" />
                    <h2 className='text-lg font-bold text-gray-700 p-2'>{movie.Title}</h2>
                    <p className='text-sm p-2 text-gray-500'>{movie.Year}</p>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default MovieList;