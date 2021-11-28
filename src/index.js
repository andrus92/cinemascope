import './styles/normalize.css';
import './styles/styles.scss';
import { 
  getMovieContainerDiv,
  getBackButton,
  getPopup,
  handlePopupOver
} from './accessors';
import { 
  clearMoviesNode,
  clearMovieDetailsNode,
  addMoviesToNode,
  addMovieDetailsToNode 
} from './render';
import { requestData } from './api';
import EventObserver from './EventObserver';
import mock from './mock';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// click
function handleClickOnMovie(evt) {
  let className = evt.target.getAttribute('class');
  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');
    addMovieDetailsToNode(moviesArr[movie_id]);
    clearMoviesNode();
    unregisterFromClickOn();
    unregisterFromMouseOver();
    registerForBackButtonClickOn();
  }
}

const networkObserver = new EventObserver();
const moviesArr = [];

// mouseover
function handleMouseOver(evt) {
  handlePopupOver(evt, (element) => {
    element.classList.add('movie__moved');
    element.style.display = 'block';
    element.setAttribute('popup', true);
  });
}

function handleMouseOut(evt) {
  const popup = getPopup(evt);
  if (popup) {
    popup.classList.toggle('movie__moved');
    popup.setAttribute('popup', false);
  }
}

function handleBackButtonClick() {
  addMoviesToNode(moviesArr);
  unregisterFromBackButtonClickOn();
  clearMovieDetailsNode();
  registerForClickOn();
  registerForMouseOver();
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
  movieContainerDiv.removeEventListener('mouseout', handleMouseOut);
}

function registerForBackButtonClickOn() {
  const backButton = getBackButton();
  backButton.addEventListener('click', handleBackButtonClick);
}

function unregisterFromBackButtonClickOn() {
  const backButton = getBackButton();
  backButton.removeEventListener('click', handleBackButtonClick);
}

// eslint-disable-next-line no-unused-vars
function handleError(data, error) {
  handleData(data);
}

function handleData(data) {
  moviesArr.length = 0;

  data.results.forEach(({poster_path, ...rest}) => {
    moviesArr.push({
      picture : IMG_URL + poster_path,
      ...rest
    });
  });

  addMoviesToNode(moviesArr);
}

function init() {
  requestData().then(i => {
    networkObserver.broadcast(i);
  }).catch((error) => handleError(mock, error));

  registerForClickOn();
  registerForMouseOver();
}

networkObserver.subscribe(handleData);
init();
