import './styles/normalize.css';
import './styles/styles.scss';
import moviesArr_mock from './mock';
import { getMovieWrap, getMovieContainerDiv, getMovieDetailsContainerDiv } from './accessors';
import { renderMovies, renderMovieDetails, clearMovies } from './render';
import { requestData } from './tmdbApi';
import EventObserver from './EventObserver';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const TIMEOUT = 500000;
// click
function handleClickOnMovie(evt) {
  let className = evt.target.getAttribute('class');
  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');
    const renderedDetails = renderMovieDetails(moviesArr[movie_id]);
    const movieDetailsContainer = getMovieDetailsContainerDiv();
    const movieWrap = getMovieWrap();

    movieDetailsContainer.append(renderedDetails);
    clearMovies(movieWrap);

    unregisterFromClickOn();
    unregisterFromMouseOver();
  }
}

const networkObserver = new EventObserver();
const moviesArr = [];

const latest_mouseover_obj = {
  class : '',
  id : ''
};

// mouseover
function handleMouseOver(evt) {
  const className = evt.target.getAttribute('class');

  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');

    if (latest_mouseover_obj.class !== 'movie__card'
                || (latest_mouseover_obj.class === 'movie__card' && latest_mouseover_obj.id !== movie_id)) {

      const movie_card = document.getElementById(movie_id);
      const movie_card_children = movie_card.childNodes;

      const movie_popup = [].find.call(movie_card_children, elem => (elem.className === 'movie__popup'));

      if (!movie_popup !== undefined) {
        movie_popup.classList.add('movie__moved');
        movie_popup.style.display = 'block';
        movie_popup.setAttribute('popup', true);
      }

      latest_mouseover_obj.id = movie_id;
    } else {
      latest_mouseover_obj.id = '';
    }
  }
  latest_mouseover_obj.class = className;
}

function handleMouseOut(evt) {
  const className = evt.target.getAttribute('class');
  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');
    const element = document.getElementById(movie_id).lastElementChild;
    const popup = element.getAttribute('popup');
    if(popup) {
      element.classList.toggle('movie__moved');
      element.setAttribute('popup', false);
    }
  }

}
function registerForClickOn() {
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.addEventListener('click', handleClickOnMovie);
}

function unregisterFromClickOn() {
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.removeEventListener('click', handleClickOnMovie);
}

function registerForMouseOver() {
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.addEventListener('mouseover', handleMouseOver);
  movieContainerDiv.addEventListener('mouseout', handleMouseOut);

}

function unregisterFromMouseOver() {
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.removeEventListener('mouseover', handleMouseOver);
}


function handleError() {
  // Render the list of movies that we already have
  moviesArr.length = 0;
    
  moviesArr_mock.forEach(mock_movie => {
    moviesArr.push(mock_movie);
  });

  const renderedMovies = renderMovies(moviesArr);
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.append(renderedMovies);
}

function getDataFromServer(data) {
  moviesArr.length = 0;

  data.results.forEach(serverFilm => {
    moviesArr.push({
      title : serverFilm.title,
      picture : IMG_URL + serverFilm.poster_path,
      vote_average : serverFilm.vote_average,
      original_title : serverFilm.original_title,
      original_language : serverFilm.original_language,
      release_date : serverFilm.release_date,
      overview : serverFilm.overview,
      popularity : serverFilm.popularity,
      vote_count : serverFilm.vote_count
    });
  });

  const renderedMovies = renderMovies(moviesArr);
  const movieContainerDiv = getMovieContainerDiv();
  movieContainerDiv.append(renderedMovies);
}

function init() {
  requestData().then(i => {
    networkObserver.broadcast(i);
  }).catch(handleError);

  registerForClickOn();
  registerForMouseOver();

}

networkObserver.subscribe(getDataFromServer);
init();
