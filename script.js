import { fetchMovies } from './api.js';
import { updateMovieCards } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const movies = await fetchMovies('/movie/popular?language=ko-KR&page=1&region=KR');
  updateMovieCards(movies);
});


document.querySelector('.movie-search').addEventListener('keyup', async (event) => {
  const query = event.target.value.trim(); // 검색어 전처리
  console.log('Search query:', query);
  const movies = await fetchMovies(`/search/movie?query=${query}&language=ko-KR&page=1`);
  updateMovieCards(movies);

  

  if (query === '') {
    // 기본 영화 목록 요청
    const movies = await fetchMovies('/movie/popular?language=ko-KR&page=1&region=KR');
    updateMovieCards(movies); // 기본 목록 업데이트
    return;
  }
});
