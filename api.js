const API_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzdhZmExMjRhN2QxMjEyNTE1ZDFiOGU0N2RkOTJiMSIsIm5iZiI6MTczNjI5OTQ3NC41NzcsInN1YiI6IjY3N2RkM2QyMzg4MWM3OTQxOWJhZmViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LWpdUhboZKdwZ2tjeZaCUCGLD9B95ITDgrYqKaeOhN4'
  }
};

// Fetch movies
async function fetchMovies(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();
    return data.results; // Return only the results array
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

export { fetchMovies, IMAGE_URL };
