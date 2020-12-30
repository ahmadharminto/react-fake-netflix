import React, { useState, useEffect } from 'react'
import './Row.scss'
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const {REACT_APP_API_POSTER_URL} = process.env;

function Row({ title, url, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL('')
        } else {
            movieTrailer(movie?.name || movie?.original_title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerURL(urlParams.get('v'))
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [url])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        className={`poster-img ${isLargeRow && "poster-imgLarge"}`} 
                        onClick={() => handleClick(movie)}
                        key={movie.id} 
                        src={`${REACT_APP_API_POSTER_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
        </div>
    )
}

export default Row
