const API_KEY = '29c9f8e4189802108a162a90fe8e239c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, query = '') => {
  try {
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// Fetch popular movies for the Home screen
export const fetchPopularMovies = async () => {
  return fetchMovies('/movie/popular');
};

// Search for movies
export const searchMovies = async (query) => {
  return fetchMovies('/search/movie', query);
};

// Fetch movies by category (e.g., genre)
export const fetchMoviesByCategory = async (genreId) => {
  return fetchMovies('/discover/movie', `&with_genres=${genreId}`);
};
