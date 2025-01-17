import { IMAGE_URL } from './api.js';

const cardList = document.querySelector('.cardList');


function updateMovieCards(movies) {
  cardList.innerHTML = '';
  movies.forEach((movie) => {
    const { id, title, poster_path, vote_average } = movie;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCard');
    movieCard.dataset.id = id;
    movieCard.innerHTML = `
      <img class="movieImage" src="${IMAGE_URL}${poster_path}" alt="${title}">
      <div class="movieName">
        <h3 class="movie-title">${title}</h3>
        <p class="movieGrade">평점: ${vote_average}</p>
      </div>
    `;
    cardList.appendChild(movieCard);

    
    movieCard.addEventListener('click', () => {
      openModal(movie);
    });
  });
}


function openModal(movie) {
  const { title, poster_path, vote_average, overview, release_date } = movie;
  modal.querySelector('.modal-image').src = `${IMAGE_URL}${poster_path}`;
  modal.querySelector('.modal-title').innerText = title;
  modal.querySelector('.modal-average').innerText = `평점: ${vote_average}`;
  modal.querySelector('.modal-view').innerText = overview;
  modal.querySelector('.modal-date').innerText = `개봉일: ${release_date}`;
  modal.style.display = 'block';
}

// modal
const modal = document.createElement('div'); // modal div 생성
modal.classList.add('modal'); // 클래스 이름 설정
modal.innerHTML = `
<div class="modal-content">
  <span class="close-btn">&times;</span>
  <br>
  <br>
  <hr>
  <img class="modal-image" src="" alt="">
  <h3 class="modal-title"></h3>
  <p class="modal-view"></p>
  <p class="modal-date"></p>
  <p class="modal-average"></p>
  <button class="book-add-btn">북마크 추가</button>
</div>
`;

document.body.appendChild(modal); // body에 modal 집어 넣기

// Close modal
function closeModal() {
  modal.style.display = 'none';
}

modal.querySelector('.close-btn').addEventListener('click', closeModal);

export { updateMovieCards, openModal, closeModal };
