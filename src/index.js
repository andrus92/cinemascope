import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';
import { getMovieWrap, getMovieContainerDiv, getMovieDetailsContainerDiv } from './accessors';
import { renderMovies, renderMovieDetails, clearMovies } from './render';
import { requestData, IMG_URL } from './tmdbApi';
import EventObserver from './EventObserver';

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
    class: '',
    id: ''
};

// mouseover
function handleMouseOver(evt) {
    const className = evt.target.getAttribute('class');

        if (className === 'movie__card') {
            const modal = document.getElementById("myModal");
            const movie_id = evt.target.getAttribute('id');

            if (latest_mouseover_obj.class !== "movie__card"
                || (latest_mouseover_obj.class === "movie__card" && latest_mouseover_obj.id !== movie_id)) {

                const movie_card = document.getElementById(movie_id);
                const movie_card_children = movie_card.childNodes;

                const movie_popup = [].find.call(movie_card_children, elem => (elem.className === "movie__popup"))

                if (movie_popup !== undefined) {
                    movie_popup.style.display = "block";
                    setTimeout(function () {
                        movie_popup.style.display = "none";
                    }, 3000);
                }

                latest_mouseover_obj.id = movie_id;
            } else {
                latest_mouseover_obj.id = '';
            }
        }
        latest_mouseover_obj.class = className;
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
}

function unregisterFromMouseOver() {
    const movieContainerDiv = getMovieContainerDiv();
    movieContainerDiv.removeEventListener('mouseover', handleMouseOver);
}

function handleError() {
    //getMovieContainerDiv().innerText = '⚠️';
    // Render the list of movies that we already have
    moviesArr.length = 0;
    moviesArr = moviesData;
    const renderedMovies = renderMovies(moviesData);
    const movieContainerDiv = getMovieContainerDiv();
    movieContainerDiv.append(renderedMovies);
}

function getDataFromServer(data) {
    moviesArr.length = 0;

    data.results.forEach(serverFilm => {
        let film = {
            title: serverFilm.title,
            picture: IMG_URL + serverFilm.poster_path,
            rating: serverFilm.vote_average,
            genres: ['Drama'],
            countries: ['USA'],
            relDate: serverFilm.release_date,
            description: serverFilm.overview,
            director: 'Franc Darabont',
            cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler', 'Clancy Brown' ]
        };
        moviesArr.push(film);
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