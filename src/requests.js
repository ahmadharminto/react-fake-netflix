const {REACT_APP_TMDB_API_KEY} = process.env;

const requests = {
    fetchNetflixOriginals: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`,
    fetchTrending: `/trending/movie/week?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`,
    fetchNetflixDiscover: `/discover/tv?api_key=${REACT_APP_TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`
}

export default requests