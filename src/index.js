import "./styles/normalize.css";
import "./styles/styles.css";
import "./styles/styles.scss"
import { sortArrayByName } from './utils';
import { moviesData } from './movies';
import { getMovieWrap, getMovieContainerDiv, getMovieDetailsContainerDiv } from './accessors';
import { renderMovies, renderMovieDetails, clearMovies } from './render';

// click

function handleClickOnMovie(evt) {
    
    let className = evt.target.getAttribute('class');
    console.log(className);
    if (className === 'movie__card') {
        const movie_id = evt.target.getAttribute('id');
        const renderedDetails = renderMovieDetails(moviesData[movie_id]);
        const movieDetailsContainer = getMovieDetailsContainerDiv();
        const movieWrap = getMovieWrap();

        movieDetailsContainer.append(renderedDetails);
        clearMovies(movieWrap);

        unregisterFromClickOn();
        unregisterFromMouseOver();
    }
}

const latest_mouseover_obj = {
    class: '',
    id: ''
};

// mouseover
function handleMouseOver(evt) {
    const className = evt.target.getAttribute('class');
        
        if (className === 'movie__card') {
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

function init() {

    const renderedMovies = renderMovies(moviesData);
    const movieContainerDiv = getMovieContainerDiv();
    movieContainerDiv.append(renderedMovies);

    registerForClickOn();
    registerForMouseOver();

}

init();
