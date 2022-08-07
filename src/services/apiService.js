import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e46b87edbe0418b9678f5579382a8e13';
axios.defaults.params = { api_key: API_KEY };

export async function fetchTrandingMovies() {
  const url = `/trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchSearchMovies(seacrhQuery) {
  const url = `/search/movie?api_key=${API_KEY}&query=${seacrhQuery}&language=en-US&include_adult=false`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchMovieInformation(movieId) {
  const url = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchCastInformation(movieId) {
  const url = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);
  return data.cast;
}

export async function fetchReviews(movieId) {
  const url = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
}

export async function fetchGenresList() {
  const url = `/genre/movie/list?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data.genres;
}
