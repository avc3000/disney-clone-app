import axios from 'axios';

const API_KEY = "d7083c164f31f6497488023e9392f474";
const MOVIE_URL = "https://api.themoviedb.org/3";
const MOVIE_GENRE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const GET_MOVIES = axios.get(MOVIE_URL + "/trending/all/day?api_key=" + API_KEY);
const GET_MOVIES_BY_GENRE_ID = (id) => axios.get(MOVIE_GENRE_URL + "&with_genres=" + id);

export default { GET_MOVIES, GET_MOVIES_BY_GENRE_ID };