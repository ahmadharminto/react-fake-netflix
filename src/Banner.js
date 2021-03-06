import React, { useState, useEffect } from 'react'
import './Banner.scss'
import axios from './axios'
import requests from './requests'

const {REACT_APP_API_POSTER_URL} = process.env;

function Banner() {
    const [movie, setMovie] = useState(null);

    let truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request
        }
        fetchData()
    }, [requests])

    return (
        <header className="banner" style={{ 
            backgroundImage: (movie) ? `url(${REACT_APP_API_POSTER_URL}${movie?.backdrop_path})` : "",
            backgroundSize: "cover",
            backgroundPosition: "center center"
         }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 180)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
