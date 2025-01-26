const API_KEY = '29c9f8e4189802108a162a90fe8e239c';
const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchMovies = async (endpoint, params = {}) => {
  try {
    
    const queryParams = new URLSearchParams({ api_key: API_KEY, ...params }).toString();
    const url = `${BASE_URL}${endpoint}?${queryParams}`;

    
    const response = await fetch(url);
    const data = await response.json();

    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};


export const fetchPopularMovies = async () => {
  
  return fetchMovies('/movie/popular', { language: 'en-US', page: 1 });
};

export const fetchMoviesBySearch = async (query) => {
 
  return fetchMovies('/search/movie', { query, language: 'en-US', page: 1 });
};

export const fetchMoviesByCategory = async (genreId) => {
  // Discover endpoint for movies by category
  return fetchMovies('/discover/movie', { with_genres: genreId, language: 'en-US', page: 1 });
};

export const getMovieCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
      const data = await response.json();
      return data; // Ensure this returns { genres: [...] }
    } catch (error) {
      console.error('Error fetching movie categories:', error);
      return null;
    }
  };
  
  
  export const getMoviesByCategory = async (categoryId) => {
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}`);
    return response.data;
  };